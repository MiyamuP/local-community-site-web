import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigateをインポート
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';


// LeafletのCSSでマーカーのスタイルを定義する
const markerHtmlStyles = `
    background-color: #2A82DA;
    width: 3rem;
    height: 3rem;
    display: block;
    left: -1.5rem;
    top: -1.5rem;
    position: relative;
    border-radius: 3rem 3rem 0;
    transform: rotate(45deg);
    border: 3px solid #FFFFFF;
    color: white; /* テキストの色 */
    font-size: 11px; /* テキストの大きさをここで調整 */
    line-height: 3rem; /* アイコンの高さに合わせて中央揃えにする */
    text-align: center; /* テキストを中央揃えにする */
    padding: 0; /* 必要に応じてパディングを調整 */
    `;

// テキストの回転角度を定義する
const textRotationStyle = `transform: rotate(0deg);`; // ピンの回転に対して逆方向に回転させる

const Home = () => {
const [prefectures, setPrefectures] = useState([]);
const [activePrefecture, setActivePrefecture] = useState(null);

// この関数はaxios.getのモックとして機能し、固定された都道府県データを返します。
const mockAxiosGet = async (url) => {
    if (url === '/api/prefecture') {
      // デモ用の固定データ
        return {
            data: [
            { id: 1, name: '北海道', position: [43.06417, 141.34694] },
            { id: 2, name: '東京', position: [35.6895, 139.6917] },
            { id: 3, name: '大阪', position: [34.6937, 135.5023] },
            ],
        };
    }
};

useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/prefecturelist/');
            setPrefectures(response.data.map(item => ({
                id: item.prefecture_id,
                name: item.prefecture_name,
                position: [item.lat, item.lon]
            })));
        } catch (error) {
            console.error("APIからのデータ取得に失敗しました。", error);
        }
    };
    fetchData();
}, []);


const navigate = useNavigate(); // useNavigate フックを初期化

// ピンをクリックした時の画面遷移処理
const handleMarkerClick = (prefecture_id) => {
    navigate(`/event/${prefecture_id}`);
    // navigate('/../article'); // デモ用の固定されたパスに遷移する
};

// 日本の範囲を表す境界
const japanBounds = [
    [45.551483, 122.93457], // 北端の近く（北海道）
    [24.396308, 153.986672] // 南端の近く（沖縄）
];

return (
    <div>
        <h1 style={{ textAlign: 'center' }}>コミュニティサイト</h1>
        <h2 style={{ textAlign: 'center' }}>地域選択</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <MapContainer
                center={[30.6895, 139.6917]}
                zoom={5}
                maxBounds={japanBounds}
                style={{ height: '80vh', width: '80%' }}
            >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {prefectures.map((prefecture) => {
                    const customMarkerIcon = L.divIcon({
                        className: "custom-div-icon",
                        html: `<span class="my-custom-pin" style="${markerHtmlStyles} ${textRotationStyle}">${prefecture.name}</span>`,
                        iconSize: [30, 42],
                        iconAnchor: [15, 42]
                    });

                    return (
                        <Marker
                            key={prefecture.id}
                            position={prefecture.position}
                            icon={customMarkerIcon}
                            eventHandlers={{
                                click: () => handleMarkerClick(prefecture.id),
                            }}
                        />
                    );
                })}
            </MapContainer>
        </div>
    </div>
);
};

export default Home;