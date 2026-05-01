// 京都テニスコートマップ JavaScript

class TennisCourtMap {
    constructor() {
        this.map = null;
        this.markers = [];
        this.filteredData = [...tennisCourtData.courts];
        this.selectedCourt = null;
        
        this.initializeMap();
        this.renderCourtsList();
        this.setupEventListeners();
        this.updateLastUpdate();
    }

    // 地図初期化
    initializeMap() {
        // 京都市中心部に地図を中央配置
        this.map = L.map('map').setView([35.0116, 135.7681], 11);
        
        // OpenStreetMap タイル追加
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(this.map);

        // 全てのコートにマーカーを追加
        this.addMarkersToMap();
    }

    // マーカーを地図に追加
    addMarkersToMap() {
        this.clearMarkers();
        
        this.filteredData.forEach(court => {
            // カスタムアイコン作成
            const icon = L.divIcon({
                className: 'court-marker',
                html: `<div class="marker-content">
                         <i class="fas fa-table-tennis"></i>
                       </div>`,
                iconSize: [30, 30],
                iconAnchor: [15, 15]
            });

            const marker = L.marker([court.location.lat, court.location.lng], {
                icon: icon
            }).addTo(this.map);

            // マーカークリック時の処理
            marker.on('click', () => {
                this.selectCourt(court.id);
                this.showCourtDetails(court);
            });

            // ポップアップ追加
            marker.bindPopup(`
                <div class="popup-content">
                    <h4>${court.name}</h4>
                    <p><i class="fas fa-clock"></i> ${court.schedule.weekdays}</p>
                    <p><i class="fas fa-yen-sign"></i> ${court.pricing.weekdays.daytime}円〜</p>
                    <button onclick="tennisApp.showCourtDetails(${JSON.stringify(court).replace(/"/g, '&quot;')})">
                        詳細を見る
                    </button>
                </div>
            `);

            this.markers.push(marker);
        });

        // カスタムマーカースタイル追加
        if (!document.getElementById('marker-styles')) {
            const style = document.createElement('style');
            style.id = 'marker-styles';
            style.textContent = `
                .court-marker {
                    background: #4CAF50;
                    border: 2px solid white;
                    border-radius: 50%;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
                }
                .marker-content {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                    color: white;
                    font-size: 12px;
                }
                .popup-content {
                    text-align: center;
                    min-width: 200px;
                }
                .popup-content h4 {
                    margin-bottom: 8px;
                    color: #111111;
                }
                .popup-content p {
                    margin: 4px 0;
                    font-size: 0.9rem;
                    color: #555;
                }
                .popup-content button {
                    background: #4CAF50;
                    color: white;
                    border: none;
                    padding: 8px 16px;
                    border-radius: 4px;
                    cursor: pointer;
                    margin-top: 8px;
                }
            `;
            document.head.appendChild(style);
        }
    }

    // マーカーをクリア
    clearMarkers() {
        this.markers.forEach(marker => {
            this.map.removeLayer(marker);
        });
        this.markers = [];
    }

    // コートリスト表示
    renderCourtsList() {
        const container = document.getElementById('courtsList');
        container.innerHTML = '';

        this.filteredData.forEach(court => {
            const courtCard = this.createCourtCard(court);
            container.appendChild(courtCard);
        });
    }

    // コートカード作成
    createCourtCard(court) {
        const card = document.createElement('div');
        card.className = 'court-card';
        card.dataset.courtId = court.id;

        // 混雑状況の判定
        const crowdingClass = this.getCrowdingClass(court.crowdingInfo.weekdayEvening);
        const crowdingText = court.crowdingInfo.weekdayEvening;

        // コート種類のバッジ
        const courtTypeBadges = court.courts.map(c => 
            `<span class="court-type-badge">${c.type} ${c.count}面</span>`
        ).join('');

        card.innerHTML = `
            <div class="court-name">${court.name}</div>
            <div class="court-types">${courtTypeBadges}</div>
            <div class="court-info">
                <div class="court-info-row">
                    <i class="fas fa-clock"></i>
                    <span>${court.schedule.weekdays}</span>
                </div>
                <div class="court-info-row">
                    <i class="fas fa-yen-sign"></i>
                    <span>${court.pricing.weekdays.daytime}円〜</span>
                </div>
                <div class="court-info-row">
                    <i class="fas fa-user"></i>
                    <span>会員登録: ${court.reservation.membershipRequired ? '必要' : '不要'}</span>
                </div>
                <div class="court-info-row">
                    <i class="fas fa-users"></i>
                    <span class="crowding-indicator crowding-${crowdingClass}">${crowdingText}</span>
                </div>
            </div>
        `;

        // カードクリックイベント
        card.addEventListener('click', () => {
            this.selectCourt(court.id);
            this.showCourtDetails(court);
            
            // 地図の中心をそのコートに移動
            this.map.setView([court.location.lat, court.location.lng], 15);
        });

        return card;
    }

    // 混雑状況のクラス取得
    getCrowdingClass(crowding) {
        if (crowding.includes('空いている')) return 'low';
        if (crowding.includes('普通') || crowding.includes('やや')) return 'medium';
        return 'high';
    }

    // コート選択
    selectCourt(courtId) {
        // 前の選択を解除
        document.querySelectorAll('.court-card').forEach(card => {
            card.classList.remove('selected');
        });

        // 新しい選択を適用
        const selectedCard = document.querySelector(`[data-court-id="${courtId}"]`);
        if (selectedCard) {
            selectedCard.classList.add('selected');
        }

        this.selectedCourt = courtId;
    }

    // コート詳細モーダル表示
    showCourtDetails(court) {
        const modal = document.getElementById('courtModal');
        const details = document.getElementById('courtDetails');

        // 料金表作成
        const pricingTable = `
            <table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
                <thead>
                    <tr style="background: #f5f5f5;">
                        <th style="padding: 0.5rem; border: 1px solid #ddd;">時間帯</th>
                        <th style="padding: 0.5rem; border: 1px solid #ddd;">平日</th>
                        <th style="padding: 0.5rem; border: 1px solid #ddd;">土日祝</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 0.5rem; border: 1px solid #ddd;">昼間</td>
                        <td style="padding: 0.5rem; border: 1px solid #ddd;">${court.pricing.weekdays.daytime}円</td>
                        <td style="padding: 0.5rem; border: 1px solid #ddd;">${court.pricing.weekends.daytime}円</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.5rem; border: 1px solid #ddd;">夜間</td>
                        <td style="padding: 0.5rem; border: 1px solid #ddd;">${court.pricing.weekdays.evening}円</td>
                        <td style="padding: 0.5rem; border: 1px solid #ddd;">${court.pricing.weekends.evening}円</td>
                    </tr>
                </tbody>
            </table>
        `;

        details.innerHTML = `
            <h2>${court.name}</h2>
            
            <div class="court-detail-section">
                <h3>基本情報</h3>
                <div class="detail-grid">
                    <div class="detail-item">
                        <span class="detail-label">住所</span>
                        <span class="detail-value">${court.location.address}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">電話番号</span>
                        <span class="detail-value">${court.contact.phone}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">営業時間</span>
                        <span class="detail-value">${court.schedule.weekdays}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">会員登録</span>
                        <span class="detail-value">${court.reservation.membershipRequired ? '必要' : '不要'}</span>
                    </div>
                </div>
            </div>

            <div class="court-detail-section">
                <h3>コート情報</h3>
                ${court.courts.map(c => `
                    <div style="background: #f9f9f9; padding: 1rem; margin: 0.5rem 0; border-radius: 4px;">
                        <strong>${c.type}</strong> - ${c.count}面 
                        ${c.lighting ? '<span style="color: #4CAF50;">⚡ ナイター設備あり</span>' : ''}
                    </div>
                `).join('')}
            </div>

            <div class="court-detail-section">
                <h3>料金表 (${court.reservation.unitHours}時間単位)</h3>
                ${pricingTable}
            </div>

            <div class="court-detail-section">
                <h3>予約情報</h3>
                <div class="detail-grid">
                    <div class="detail-item">
                        <span class="detail-label">予約開始</span>
                        <span class="detail-value">${court.reservation.advanceBooking}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">オンライン予約</span>
                        <span class="detail-value">${court.reservation.onlineBooking ? '可能' : '不可'}</span>
                    </div>
                </div>
                ${court.reservation.bookingUrl ? `
                    <a href="${court.reservation.bookingUrl}" target="_blank" class="reservation-button">
                        <i class="fas fa-external-link-alt"></i>
                        予約ページへ
                    </a>
                ` : ''}
            </div>

            <div class="court-detail-section">
                <h3>施設・設備</h3>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                    ${court.facilities.map(facility => `
                        <span style="background: #e8f5e8; color: #2e7d32; padding: 0.3rem 0.6rem; border-radius: 12px; font-size: 0.9rem;">
                            ${facility}
                        </span>
                    `).join('')}
                </div>
            </div>

            ${court.notes ? `
                <div class="court-detail-section">
                    <h3>備考</h3>
                    <p>${court.notes}</p>
                </div>
            ` : ''}
        `;

        modal.style.display = 'block';
    }

    // フィルター機能
    setupEventListeners() {
        // フィルター変更イベント
        document.getElementById('courtType').addEventListener('change', () => this.applyFilters());
        document.getElementById('membershipRequired').addEventListener('change', () => this.applyFilters());
        document.getElementById('priceRange').addEventListener('change', () => this.applyFilters());

        // モーダル閉じる
        document.querySelector('.modal-close').addEventListener('click', () => {
            document.getElementById('courtModal').style.display = 'none';
        });

        // モーダル外クリックで閉じる
        document.getElementById('courtModal').addEventListener('click', (e) => {
            if (e.target.id === 'courtModal') {
                document.getElementById('courtModal').style.display = 'none';
            }
        });
    }

    // フィルター適用
    applyFilters() {
        const courtType = document.getElementById('courtType').value;
        const membershipRequired = document.getElementById('membershipRequired').value;
        const priceRange = document.getElementById('priceRange').value;

        this.filteredData = tennisCourtData.courts.filter(court => {
            // コート種別フィルター
            if (courtType && !court.courts.some(c => c.type === courtType)) {
                return false;
            }

            // 会員登録フィルター
            if (membershipRequired && court.reservation.membershipRequired.toString() !== membershipRequired) {
                return false;
            }

            // 料金帯フィルター
            if (priceRange) {
                const price = court.pricing.weekdays.daytime;
                if (priceRange === 'low' && price >= 1000) return false;
                if (priceRange === 'medium' && (price < 1000 || price >= 2000)) return false;
                if (priceRange === 'high' && price < 2000) return false;
            }

            return true;
        });

        // リストと地図を更新
        this.renderCourtsList();
        this.addMarkersToMap();
    }

    // 最終更新日設定
    updateLastUpdate() {
        document.getElementById('lastUpdate').textContent = tennisCourtData.metadata.lastUpdated;
    }
}

// アプリケーション初期化
let tennisApp;
document.addEventListener('DOMContentLoaded', () => {
    tennisApp = new TennisCourtMap();
});