/* ─────────────────────────────────────────
   1. ZONE_DATA
   면 크기: back 1100×660 / left·right 660×660 / top·bottom 1100×660
───────────────────────────────────────── */
const ZONE_DATA = {
  // ── 기초설비 ──
  'zone-b01': [ { face: 'face-back',   x: 570, y:  50, w: 450, h: 500 } ],  // 알코브
  'zone-b02': [ { face: 'face-back',   x: 500, y: 430, w: 300, h: 180 } ],  // 콘센트
  'zone-b03': [ { face: 'face-back',   x:   0, y:   0, w:   0, h:   0 } ],  // 전선
  'zone-b04': [ { face: 'face-back',  x: 350, y: 610, w: 380, h: 50 },  { face: 'face-bottom', x: 350, y:   0, w: 380, h: 110 } ],  // 문턱
  'zone-b05': [ { face: 'face-left',  x: 30, y: 50, w: 350, h: 530 }  ],  // 비상 유도등
  'zone-b06': [ { face: 'face-left',   x: 0, y: 560, w: 300, h: 100 }, { face: 'face-bottom', x: 0, y: 360, w: 40, h: 300 } ],  // 하부몰딩  
  'zone-b07': [ { face: 'face-back',  x: 800, y: 110, w: 300, h: 220 }, { face: 'face-right', x: 0,   y: 110, w: 250, h: 220 }],  // 에어컨 (단면)
  'zone-b08': [ { face: 'face-right', x: 5, y: 485, w: 410, h: 100 } ],  // 단차 (단면)
  'zone-b09': [ { face: 'face-right',  x: 400, y: 120, w: 255, h: 360 } ],  // 라디에이터 
  'zone-b10': [ { face: 'face-left',   x: 0,   y: 15,  w: 630, h: 350 } ],  // 블라인드
  'zone-b11': [ { face: 'face-bottom', x: 250, y: 300, w: 200, h: 200 } ],  // 핀조명  
  'zone-b12': [ { face: 'face-top',    x: 750, y: 50,  w: 250, h: 150 } ],  // 조명레일
  'zone-b13': [ { face: 'face-back',   x: 550, y: 300, w: 300, h: 250 } ],  // 보안카메라
  'zone-b14': [ { face: 'face-bottom', x: 180, y: 100, w: 320, h: 140 } ],  // 바닥타일
  'zone-b15': [ { face: 'face-bottom', x: 170, y: 425, w: 200, h: 205 } ],  // 안내데스크
  'zone-b16': [ { face: 'face-top',    x: 490, y: 460, w: 240, h: 200 }, 
                { face: 'face-back',   x: 490, y: 0,   w: 240, h: 660 }, 
                { face: 'face-bottom', x: 490, y: 0,   w: 240, h: 100 } ],  // 기둥
  'zone-b17': [ { face: 'face-bottom', x: 480, y: 450, w: 300, h: 160 } ],  // 점자블록
  'zone-b18': [ { face: 'face-bottom', x:   0, y:   0, w:   0, h:   0 } ],  // 매립형레일

// ── 추가설비 ──
// 천장+앞벽 연결 (h 통일)
// 천장+앞벽 연결 (h 통일) - 기존 코드 완벽함! 그대로 유지
'zone-e19': [ { face: 'face-top',    x:   7, y: 360, w: 500, h: 300 }, { face: 'face-back',   x:   7, y:   0, w: 500, h: 300 } ], 
'zone-e20': [ { face: 'face-top',    x: 600, y: 360, w: 400, h: 300 }, { face: 'face-back',   x: 600, y:   0, w: 400, h: 300 } ], 
'zone-e21': [ { face: 'face-top',    x:  25, y: 200, w: 600, h: 300 } ],                                                        
'zone-e22': [ { face: 'face-top',    x:   -4, y: 360, w: 170, h: 300 }, { face: 'face-back',   x:   -4, y:   0, w: 170, h: 300 } ], 
'zone-e23': [ { face: 'face-back',   x: 200, y: 100, w: 300, h: 560 } ],                                                        

// 💡 [수정됨] 계수기: 2번 이미지처럼 3면을 완벽히 관통하는 검은 라인! (y 통일, 각 벽의 최대 w 사용)
'zone-e24': [ { face: 'face-left',   x: 0, y: 100, w: 660, h: 80 }, { face: 'face-back',   x: 0, y: 100, w: 1100, h: 80 }, { face: 'face-right', x: 0, y: 100, w: 660, h: 80 } ],                                                        

// 💡 [수정됨] 좌벽+천장 (모서리가 만나려면 좌벽은 y:0, 천장은 x:0 이어야 함!)
'zone-e25': [ { face: 'face-left',   x: 80, y: 0, w: 350, h: 400 }, { face: 'face-top',    x: 0, y: 80, w: 400, h: 350 } ], 
'zone-e26': [ { face: 'face-left',   x: 150, y: 150, w: 350, h: 400 } ],                                                        

// 💡 [수정됨] 삼면 스윕 (모든 벽의 w를 꽉 채워야 틈새 없이 연결됨!)
'zone-e27': [ { face: 'face-left',   x:   0, y: 165, w: 660, h: 330 }, { face: 'face-back',   x:   0, y: 165, w: 1100, h: 330 }, { face: 'face-right', x: 0, y: 165, w: 660, h: 330 } ], 
'zone-e28': [ { face: 'face-left',   x:   0, y: 100, w: 660, h: 300 }, { face: 'face-back',   x:   0, y: 100, w: 1100, h: 300 }, { face: 'face-right', x: 0, y: 100, w: 660, h: 300 } ], 

// 좌벽+바닥 (h 통일)
'zone-e29': [ { face: 'face-left',   x:   0, y: 400, w: 500, h: 260 }, { face: 'face-bottom', x:   0, y:   0, w: 500, h: 260 } ], 

// 우벽 (단면은 문제없음!)
'zone-e30': [ { face: 'face-right',  x:   0, y:   0, w: 350, h: 500 } ],                                                        
'zone-e31': [ { face: 'face-right',  x: 300, y:   0, w: 360, h: 400 }, { face: 'face-top',    x: 700, y: 260, w: 360, h: 400 } ], 
'zone-e32': [ { face: 'face-right',  x: 200, y: 150, w: 400, h: 400 } ],                                                        
'zone-e33': [ { face: 'face-right',  x:   0, y: 260, w: 450, h: 400 }, { face: 'face-back',   x: 650, y: 260, w: 450, h: 400 } ], 
'zone-e34': [ { face: 'face-right',  x: 150, y: 300, w: 400, h: 360 } ],                                                        

// 바닥+앞벽 (w 통일, 세로 연결) - 네가 짠 이 부분 로직은 수학적으로 아주 완벽해! 👏
'zone-e35': [ { face: 'face-bottom', x:   0, y:   0, w: 600, h: 200 }, { face: 'face-back',   x:   0, y: 460, w: 600, h: 200 } ], 
'zone-e36': [ { face: 'face-bottom', x: 400, y: 100, w: 300, h: 350 }, { face: 'face-back',   x: 400, y: 310, w: 300, h: 350 } ], 
'zone-e38': [ { face: 'face-bottom', x: 300, y: 200, w: 400, h: 300 }, { face: 'face-back',   x: 300, y: 360, w: 400, h: 300 } ], 
'zone-e39': [ { face: 'face-bottom', x: 200, y: 350, w: 500, h: 200 }, { face: 'face-back',   x: 200, y: 460, w: 500, h: 200 } ], 
'zone-e40': [ { face: 'face-bottom', x: 700, y: 200, w: 350, h: 350 }, { face: 'face-back',   x: 700, y: 310, w: 350, h: 350 } ], 
'zone-e41': [ { face: 'face-bottom', x: 450, y: 150, w: 500, h: 500 } ],                                                        
'zone-e44': [ { face: 'face-bottom', x: 800, y: 350, w: 300, h: 310 }, { face: 'face-back',   x: 800, y: 350, w: 300, h: 310 } ], 
'zone-e45': [ { face: 'face-bottom', x: 500, y: 350, w: 300, h: 310 }, { face: 'face-back',   x: 500, y: 350, w: 300, h: 310 } ], 
'zone-e46': [ { face: 'face-bottom', x: 200, y: 350, w: 600, h: 310 }, { face: 'face-back',   x: 200, y: 350, w: 600, h: 310 } ], 
'zone-e47': [ { face: 'face-right',  x:  80, y: 100, w: 350, h: 500 } ],                                                        
'zone-e48': [ { face: 'face-right',  x: 300, y:  50, w: 360, h: 500 } ],                                                        
'zone-e49': [ { face: 'face-back',   x:  80, y: 400, w: 350, h: 260 }, { face: 'face-bottom', x:  80, y:   0, w: 350, h: 260 } ]
};
// ── 기초설비 개별 zone (b01~b18) ──

/* ─────────────────────────────────────────
   2. BUTTON_DATA (기초설비 18개)
   기존 594×420 → 1100×660 (x×1.852, y×1.571)
   left/right x → ×1.571
───────────────────────────────────────── */
const BUTTON_DATA = [
  { id:'b01', face:'face-back',   x:148, y:146, w:348, h:377, targetZone:'zone-b01',
    label:'01', title:'알코브 (Alcove)',
    text:`알코브는 전시장에 기본적으로 설치되는 기초설비로, 벽면을 오목하게 하여 만든 공간이다. 주벽에서 일부를 후퇴시켜 형성된 반독립적인 소공간으로, 전시 공간에서는 특정 작품이나 오브제를 위한 전용 공간으로 활용되거나 관람객이 잠시 머물 수 있는 공간으로 기능한다. (출처: 위키백과 — 알코브식 배가법)\n\n전시 공간에서 알코브는 주 공간과 연결되어 있으면서도 분리된 미시적 경계를 형성한다. 벽면이 후퇴하여 생긴 움푹 들어간 형태 자체가 관람객의 신체를 특정 방향으로 유도하고, 그 안에 들어가는 순간 주변 공간으로부터 분리된 친밀한 영역을 경험하게 된다. 거리감은 2단계 감상적 반경(45–120cm)에서 작동하며, 일반적인 크기는 W200 × D70 × H250cm다.\n\nAn alcove is a base fixture installed as standard in exhibition spaces, a space formed by recessing a wall surface inward. The recessed form guides the visitor's body in a specific direction, and upon entering it, the visitor experiences an intimate zone separated from the surrounding space. It operates at the second stage of appreciative distance (45–120cm), and standard dimensions are W200 × D70 × H250cm.` },

  { id:'b02', face:'face-back',   x:280, y:547, w:72,  h:31,  targetZone:'zone-b02',
    label:'02', title:'콘센트 (Electrical Outlet)',
    text:`콘센트는 전시장에 기본적으로 설치되는 기초설비로, 전기 기기의 플러그를 꽂아 전력을 공급받을 수 있도록 벽면이나 바닥에 매립된 전기 접속 장치다.\n\n전시 공간에서 콘센트는 전시 설비가 배치될 수 있는 반경의 기준점을 설정한다. 거리감은 4단계 시스템적 반경(360cm 이상)에서 작동하며, 일반적인 크기는 W10 × D1 × H5cm다.\n\nAn electrical outlet establishes the reference point for the radius within which exhibition equipment can be placed. It operates at the fourth stage of systemic distance (360cm+), and standard dimensions are W10 × D1 × H5cm.` },

  { id:'b03', face:'face-back',   x:194, y:627, w:161, h:20,  targetZone:'zone-b03',
    label:'03', title:'전선 (Electric Cable)',
    text:`전선은 전시장에 기본적으로 설치되는 기초설비로, 전기 에너지를 전달하기 위해 도체를 절연재로 감싼 선형 구조물이다.\n\n바닥을 가로지르는 전선은 관람객이 넘거나 우회하도록 동선을 변형시킨다. 거리감은 4단계 시스템적 반경(360cm 이상)에서 작동하며, 일반적인 단면 크기는 Ø1 × L300cm다.\n\nCables crossing the floor alter visitor movement by requiring them to step over or detour around them. It operates at the fourth stage of systemic distance (360cm+).` },

  { id:'b04', face:'face-back',   x:720, y:627, w:363, h:20,  targetZone:'zone-b04',
    label:'04', title:'문턱 (Threshold)',
    text:`문턱은 전시장에 기본적으로 설치되는 기초설비로, 출입구나 공간 전환점의 바닥에 설치되는 낮은 단차 구조물이다.\n\n전시 공간에서 문턱은 두 공간 사이의 가장 작은 물질적 경계다. 거리감은 1단계 신체적 반경(0–45cm)에서 작동하며, 일반적인 크기는 W150 × D10 × H10cm다.\n\nThe threshold is the smallest material boundary between two spaces. It operates at the first stage of intimate distance (0–45cm), and standard dimensions are W150 × D10 × H10cm.` },

  { id:'b05', face:'face-left',   x:374, y:449, w:82,  h:44,  targetZone:'zone-b05',
    label:'05', title:'유도등 (Emergency Exit Sign)',
    text:`유도등은 전시장에 기본적으로 설치되는 기초설비로, 비상 상황 시 관람객을 안전하게 대피시키기 위해 천장이나 벽면에 설치하는 발광 표시 장치다.\n\n전시 공간에서 유도등은 평상시에는 배경으로 존재하다가 비상 상황에서만 능동적 경계로 전환되는 조건부 장치다. 거리감은 4단계 시스템적 반경(360cm 이상)에서 작동하며, 일반적인 크기는 W20 × D3 × H10cm다.\n\nThe emergency exit sign exists as background during normal operation and transitions into an active boundary only in emergency situations. It operates at the fourth stage of systemic distance (360cm+).` },

  { id:'b06', face:'face-left',   x:339, y:627, w:308, h:20,  targetZone:'zone-b06',
    label:'06', title:'하부 몰딩 (Baseboard Molding)',
    text:`하부 몰딩은 전시장에 기본적으로 설치되는 기초설비로, 벽체와 바닥이 만나는 하단 코너에 설치하는 띠 형태의 마감재다. 전시 공간에서 하부 몰딩은 벽면과 바닥면 사이의 경계를 물질화하는 가장 작은 건축적 요소다. 거리감은 1·2단계(0–120cm)에서 작동하며, 일반적인 크기는 W300 × D2 × H10cm다.\n\nThe baseboard molding is the smallest architectural element that materializes the boundary between wall and floor surfaces. It operates at the first and second stages of proxemic distance (0–120cm).` },

  { id:'b07', face:'face-right',  x:14,  y:14,  w:225, h:77,  targetZone:'zone-b07',
    label:'07', title:'에어컨 (Air Conditioner)',
    text:`에어컨은 전시장에 기본적으로 설치되는 기초설비로, 냉각 순환을 사용하여 실내의 열을 외부로 배출하고 온도와 습도를 조절하는 기기다.\n\n전시 공간에서 에어컨은 온도차를 통해 공간을 감각적으로 구획한다. 냉기가 닿는 반경과 닿지 않는 반경 사이에 피부로 감지되는 비물질적 경계가 형성된다. 거리감은 1단계 신체적 반경(0–45cm)에서 작동하며, 일반적인 크기는 W84 × D20 × H30cm다.\n\nThe air conditioner divides space sensorially through temperature difference. A non-material boundary perceived through the skin forms between zones. It operates at the first stage of proxemic distance (0–45cm).` },

  { id:'b08', face:'face-right',  x:14,  y:597, w:385, h:50,  targetZone:'zone-b08',
    label:'08', title:'단차 (Level Change)',
    text:`단차는 전시장에 기본적으로 설치되는 기초설비로, 바닥면의 높이가 달라지는 지점에 형성되는 수직적 경계 요소다.\n\n전시 공간에서 단차는 바닥의 높이 변화만으로 영역의 전환을 신체적으로 인지시킨다. 거리감은 1·3단계(0–45cm, 120–360cm)에서 작동하며, 일반적인 크기는 W300 × D10 × H10cm다.\n\nThe level change causes visitors to physically register a spatial transition through floor height variation alone. It operates at the first and third stages of proxemic distance (0–45cm, 120–360cm).` },

  { id:'b09', face:'face-right',  x:431, y:495, w:204, h:151, targetZone:'zone-b09',
    label:'09', title:'라디에이터 (Radiator)',
    text:`라디에이터는 전시장에 기본적으로 설치되는 기초설비로, 온수나 증기를 순환시켜 열을 방출하는 난방 장치다.\n\n전시 공간에서 라디에이터는 온기가 닿는 반경과 닿지 않는 반경 사이에 감각적 경계를 만든다. 거리감은 1단계 신체적 반경(0–45cm)에서 작동하며, 일반적인 크기는 W400 × D5 × H70cm다.\n\nThe radiator creates a sensory boundary between zones the warmth reaches and those it does not. It operates at the first stage of intimate distance (0–45cm).` },

  { id:'b10', face:'face-top',    x:17,  y:22,  w:406, h:28,  targetZone:'zone-b10',
    label:'10', title:'블라인드 (Blind)',
    text:`블라인드는 전시 목적으로 별도 반입되는 차광 장치로, 채광 조절, 보온, 방음은 물론 밖에서 방 안이 들여다보이지 않게 하는 기능을 수행하는 창문 가리개다.\n\n전시 공간에서 블라인드는 슬랫 각도에 따라 빛의 투과량을 정밀하게 조절하며 구역의 조도를 달리한다. 거리감은 2단계 감상적 반경(45–120cm)에서 작동하며, 일반적인 크기는 W200 × D0.5 × H300cm다.\n\nThe blind precisely regulates light transmission through slat angle adjustment. It operates at the second stage of appreciative distance (45–120cm).` },

  { id:'b11', face:'face-top',    x:304, y:228, w:67,  h:57,  targetZone:'zone-b11',
    label:'11', title:'핀 조명 (Pin Spotlight)',
    text:`핀조명은 전시장에 기본적으로 설치되는 기초설비로, 좁은 빔 각도로 특정 지점만을 강하게 조사하는 집중형 조명 장치다.\n\n전시 공간에서 핀조명은 빛이 닿는 영역과 닿지 않는 영역 사이에 명확한 경계를 만든다. 거리감은 2단계 감상적 반경(45–120cm)에서 작동하며, 일반적인 크기는 W10 × D10 × H20cm다.\n\nThe pin spotlight creates a clear boundary between areas the light reaches and those it does not. It operates at the second stage of appreciative distance (45–120cm).` },

  { id:'b12', face:'face-top',    x:1043,y:214, w:35,  h:355, targetZone:'zone-b12',
    label:'12', title:'조명 레일 (Lighting Rail)',
    text:`조명 레일은 전시장에 기본적으로 설치되는 기초설비로, 천장에 고정된 도전성 레일을 따라 조명 기구를 자유롭게 이동·배치할 수 있는 조명 시스템이다.\n\n전시 공간에서 조명 레일은 빛의 분포를 통해 공간의 위계와 영역을 설정한다. 거리감은 2단계 감상적 반경(45–120cm)에서 작동하며, 일반적인 크기는 W200 × D5 × H3cm다.\n\nThe lighting rail establishes spatial hierarchy and zones through the distribution of light. It operates at the second stage of appreciative distance (45–120cm).` },

  { id:'b13', face:'face-top',    x:1013,y:585, w:67,  h:57,  targetZone:'zone-b13',
    label:'13', title:'보안 카메라 (Security Camera)',
    text:`보안 카메라는 전시장에 기본적으로 설치되는 기초설비로, 비디오 카메라를 이용해 특정된 장소의 한정된 모니터로 신호를 전송하는 감시 장치다.\n\n전시 공간에서 보안 카메라는 촬영된다는 인식만으로 관람객의 행위를 심리적으로 억제한다. 거리감은 4단계 시스템적 반경(360cm 이상)에서 작동하며, 일반적인 크기는 W8 × D20 × H7cm다.\n\nThe security camera psychologically suppresses visitor behavior through the mere awareness of being recorded. It operates at the fourth stage of systemic distance (360cm+).` },

  { id:'b14', face:'face-bottom', x:20,  y:105, w:163, h:138, targetZone:'zone-b14',
    label:'14', title:'바닥 타일 (Floor Tile)',
    text:`바닥 타일은 전시장에 기본적으로 설치되는 기초설비로, 점토를 구워서 만든 마감재다.\n\n전시 공간에서 바닥 타일은 물리적인 벽 없이 재질이나 색상의 변화만으로 영역의 전환을 인지시킨다. 일반적인 규격은 W30 × D30 × H1cm다.\n\nFloor tiles communicate spatial transitions through changes in material or color alone, without any physical wall. Standard dimensions are W30 × D30 × H1cm.` },

  { id:'b15', face:'face-bottom', x:63,  y:429, w:120, h:204, targetZone:'zone-b15',
    label:'15', title:'안내 데스크 (Information Desk)',
    text:`안내데스크는 전시장에 기본적으로 설치되는 기초설비로, 입장권 발권·안내·물품 대여 등의 서비스를 제공하는 카운터형 가구다.\n\n전시 공간에서 안내데스크는 전시 공간과 외부 사이의 의례적 관문을 형성한다. 거리감은 2·3단계(45–360cm)에서 작동하며, 일반적인 크기는 W100 × D50 × H70cm다.\n\nThe information desk forms a ritual gateway between the exhibition space and the outside world. It operates at the second and third stages of proxemic distance (45–360cm).` },

  { id:'b16', face:'face-bottom', x:609, y:185, w:89,  h:75,  targetZone:'zone-b16',
    label:'16', title:'기둥 (Column)',
    text:`기둥은 전시장에 기본적으로 설치되는 기초설비로, 건물의 하중을 지지하기 위해 수직으로 세워진 구조 부재다.\n\n전시 공간에서 기둥은 제거하거나 이동할 수 없는 고정 경계로 작동한다. 이 콜렉션에서 유일하게 전시자의 의도와 무관하게 존재하는 가벽이다. 거리감은 3단계 동선적 반경(120–360cm)에서 작동하며, 일반적인 크기는 W40 × D40 × H250cm다.\n\nThe column is the only boundary in this collection that exists independently of any curatorial intention. It operates at the third stage of proxemic distance (120–360cm).` },

  { id:'b17', face:'face-bottom', x:807, y:464, w:163, h:138, targetZone:'zone-b17',
    label:'17', title:'점자블록 (Tactile Paving)',
    text:`점자블록은 전시장에 기본적으로 설치되는 기초설비로, 시각장애인의 보행 안전을 위해 바닥에 설치하는 돌기형 표면 처리 블록이다.\n\n전시 공간에서 점자블록은 발바닥의 촉각적 신호를 통해 방향과 경고를 전달하는 경계 장치다. 이 콜렉션에서 접근성을 위해 설계된 유일한 가벽이다. 거리감은 1·3단계(0–45cm, 120–360cm)에서 작동하며, 일반적인 크기는 W30 × D30 × H1cm다.\n\nTactile paving is the only boundary in this collection designed specifically for accessibility. It operates at the first and third stages of proxemic distance (0–45cm, 120–360cm).` },

  { id:'b18', face:'face-bottom', x:1043,y:91,  w:35,  h:355, targetZone:'zone-18',
    label:'18', title:'매립형 레일 (Recessed Floor Rail)',
    text:`매립형 레일은 전시장에 기본적으로 설치되는 기초설비로, 바닥면에 매립하여 파티션·가벽·전시대 등의 구조물을 고정하거나 이동시키는 홈 형태의 레일 시스템이다.\n\n전시 공간에서 매립형 레일은 그 자체로 경계를 형성하기보다 다른 가벽의 설치 경로를 규정한다. 거리감은 3단계 동선적 반경(120–360cm)에서 작동하며, 일반적인 크기는 W200 × D5 × H3cm다.\n\nThe recessed floor rail defines the installation path for other boundaries rather than forming a boundary itself. It operates at the third stage of proxemic distance (120–360cm).` },
];

/* ─────────────────────────────────────────
   3. 기초설비 렌더링
───────────────────────────────────────── */
BUTTON_DATA.forEach(btn => {
  const faceEl = document.getElementById(btn.face);
  if (!faceEl) return;
  const el = document.createElement('div');
  el.className = 'bb';
  el.style.left   = btn.x + 'px';
  el.style.top    = btn.y + 'px';
  el.style.width  = btn.w + 'px';
  el.style.height = btn.h + 'px';
  el.innerHTML = `<span class="bl">${btn.label}</span>`;
  el.addEventListener('click', e => { e.stopPropagation(); activateZone(btn); });
  faceEl.appendChild(el);
});

/* ─────────────────────────────────────────
   4. EXTRA_DATA (추가설비 30개)
   기존 좌표 × 스케일 (back/top/bottom: ×1.852/×1.571, left/right: ×1.571)
───────────────────────────────────────── */
const EXTRA_DATA = [
  // 천장
  { face:'face-top',    x:630, y:129, label:'19', type:'material',   targetZone:'zone-e19',
    title:'산업용 비닐 커튼 (Industrial Vinyl Curtain)',
    text:`산업용 비닐 커튼은 전시 목적으로 별도 반입되는 추가설비로, 투명 PVC 비닐 스트립을 천장 레일에 연속으로 늘어뜨려 설치하는 경계 장치다.\n\n전시 공간에서 산업용 비닐 커튼은 시야는 확보하되 온도와 냄새의 이동을 간헐적으로 조절한다. 거리감은 2단계 감상적 반경(45–120cm)에서 작동하며, 일반적인 크기는 W200 × D0.3 × H200cm다.\n\nThe industrial vinyl curtain maintains visual clarity while intermittently regulating the movement of temperature and odor. It operates at the second stage of appreciative distance (45–120cm).` },
 
  { face:'face-top',    x:889, y:236, label:'20', type:'material',   targetZone:'zone-e20',
    title:'빔프로젝터 (Beam Projector)',
    text:`빔프로젝터는 전시 목적으로 별도 반입되는 추가설비로, 광원에서 발생한 빛을 렌즈를 통해 스크린이나 벽면에 투사하는 장치다.\n\n전시 공간에서 빔프로젝터는 빛이 닿는 영역 자체가 경계면이 된다. 장치를 끄는 순간 경계가 소멸한다. 거리감은 2단계 감상적 반경(45–120cm)에서 작동하며, 일반적인 크기는 W40 × D30 × H18cm다.\n\nThe beam projector turns the area the light reaches into the boundary surface itself. It operates at the second stage of appreciative distance (45–120cm).` },
  
  { face:'face-top',    x:37,  y:354, label:'21', type:'material',   targetZone:'zone-e21',
    title:'와이어 로프 (Wire Rope)',
    text:`와이어 로프는 전시 목적으로 별도 반입되는 추가설비로, 가는 금속 선을 꼬아 만든 케이블을 기둥이나 벽면 사이에 팽팽하게 연결하는 구조물이다.\n\n전시 공간에서 와이어 로프는 이 콜렉션에서 가장 최소한의 물질 경계다. 거리감은 3단계 동선적 반경(120–360cm)에서 작동하며, 일반적인 크기는 W300 × D0.5 × H100cm다.\n\nThe wire rope is the most minimal material boundary in this collection. It operates at the third stage of proxemic distance (120–360cm).` },

  // 앞벽
  { face:'face-back',   x:56,  y:204, label:'22', type:'material',   targetZone:'zone-e22',
    title:'도슨트 (Docent)',
    text:`도슨트는 전시 목적으로 별도 배치되는 추가설비로, 전시장 내에서 작품 해설과 관람 안내를 수행하는 인적 경계 장치다.\n\n전시 공간에서 도슨트는 이 콜렉션에서 유일하게 살아있는 가벽이다. 거리감은 4단계 시스템적 반경(360cm 이상)에서 작동하며, 일반적인 크기는 W50 × D30 × H170cm다.\n\nThe docent is the only living boundary in this collection. It operates at the fourth stage of systemic distance (360cm+).` },
  { face:'face-back',   x:37,  y:613, label:'23', type:'material',   targetZone:'zone-e23',
    title:'유리 파티션 (Glass Partition)',
    text:`유리 파티션은 전시 목적으로 별도 반입되는 추가설비로, 투명한 유리 패널로 공간을 시각적으로 개방하면서도 물리적으로 구획하는 경계 장치다.\n\n전시 공간에서 유리 파티션은 보이지만 갈 수 없는 공간을 만든다. 거리감은 3단계 동선적 반경(120–360cm)에서 작동하며, 일반적인 크기는 W100 × D1 × H170cm다.\n\nA glass partition creates a space that is visible but unreachable. It operates at the third stage of proxemic distance (120–360cm).` },
  { face:'face-back',   x:741, y:314, label:'24', type:'immaterial', targetZone:'zone-e24',
    title:'계수기 (People Counter)',
    text:`계수기는 전시장에 기본적으로 설치되는 기초설비로, 적외선·열화상·레이더 센서를 활용하여 특정 지점을 통과하는 인원을 자동으로 집계하는 디지털 감지 장치다.\n\n전시 공간에서 계수기는 경계를 통과하는 행위 자체를 수치화하여 경계의 존재를 데이터로 증명한다. 거리감은 4단계 시스템적 반경(360cm 이상)에서 작동하며, 일반적인 크기는 W3 × D3 × H4cm다.\n\nThe people counter automatically tallies individuals passing through a specific point. It operates at the fourth stage of systemic distance (360cm+).` },

  // 좌벽
  { face:'face-left',   x:275, y:86,  label:'25', type:'material',   targetZone:'zone-e25',
    title:'천 커튼 (Fabric Curtain)',
    text:`천 커튼은 전시 목적으로 별도 반입되는 추가설비로, 직물 소재의 패널을 천장의 레일이나 봉에 매달아 공간을 구획하는 가변적 경계 장치다.\n\n전시 공간에서 천 커튼은 시선을 실루엣과 윤곽만 남기고 내용을 걸러낸다. 거리감은 3단계 동선적 반경(120–360cm)에서 작동하며, 일반적인 크기는 W200 × D0.3 × H300cm다.\n\nA fabric curtain filters out content leaving only silhouettes and outlines visible. It operates at the third stage of proxemic distance (120–360cm).` },
  { face:'face-left',   x:189, y:275, label:'26', type:'material',   targetZone:'zone-e26',
    title:'거울 (Mirror)',
    text:`거울은 전시 목적으로 별도 반입되는 추가설비로, 유리 표면에 반사 코팅을 처리하여 빛을 정반사하는 수직 구조물이다.\n\n전시 공간에서 거울은 실제 공간의 한계를 깨고 가상의 깊이감을 만든다. 거리감은 2단계 감상적 반경(45–120cm)에서 작동하며, 일반적인 크기는 W70 × D1 × H100cm다.\n\nA mirror breaks the limits of actual space and creates an illusory sense of depth. It operates at the second stage of appreciative distance (45–120cm).` },
  { face:'face-left',   x:79,  y:448, label:'27', type:'immaterial', targetZone:'zone-e27',
    title:'비콘 (Beacon)',
    text:`비콘은 전시 목적으로 별도 반입되는 추가설비로, BLE·UWB 등의 무선 주파수를 발신하여 기기의 위치와 진입을 감지하는 디지털 경계 장치다.\n\n전시 공간에서 비콘은 빛도 소리도 형태도 없이 존재하는 경계다. 거리감은 2단계 감상적 반경(45–120cm)에서 작동하며, 일반적인 크기는 W4 × D4 × H3cm다.\n\nA beacon is a boundary that exists without light, sound, or form. It operates at the second stage of appreciative distance (45–120cm).` },
  { face:'face-left',   x:346, y:558, label:'28', type:'immaterial', targetZone:'zone-e28',
    title:'향기 (Scent)',
    text:`향기는 전시 목적으로 별도 반입되는 추가설비로, 인센스·디퓨저·향수 분사기 등을 통해 특정 향 성분을 대기 중에 확산시켜 후각적으로 영역을 구분하는 비물질적 경계 장치다.\n\n전시 공간에서 향기는 이 콜렉션에서 가장 잔류 지속성이 강한 비물질적 경계다. 거리감은 1단계 신체적 반경(0–45cm)에서 작동하며, 일반적인 크기는 W10 × D10 × H10cm다.\n\nScent is the most residually persistent of all non-material boundaries in this collection. It operates at the first stage of intimate distance (0–45cm).` },
  { face:'face-left',   x:47,  y:613, label:'29', type:'immaterial', targetZone:'zone-e29',
    title:'스모그 머신 (Smoke Machine)',
    text:`스모그 머신은 전시 목적으로 별도 반입되는 추가설비로, 글리콜 계열의 액체를 가열하여 인공 안개를 생성하고 공간에 분사하는 장치다.\n\n전시 공간에서 스모그 머신은 공기 자체를 불투명하게 만들어 시야를 차단하는 비물질적 경계를 형성한다. 거리감은 1·3단계(0–45cm, 120–360cm)에서 작동하며, 일반적인 크기는 W47 × D20 × H20cm다.\n\nA smoke machine creates a non-material boundary by rendering the air itself opaque to block vision.` },

  // 우벽
  { face:'face-right',  x:94,  y:126, label:'30', type:'material',   targetZone:'zone-e30',
    title:'암막 커튼 (Blackout Curtain)',
    text:`암막 커튼은 전시 목적으로 별도 반입되는 추가설비로, 빛의 투과를 완전히 차단하는 특수 코팅 직물이다.\n\n전시 공간에서 암막 커튼은 천 커튼이 실루엣을 남기는 것과 달리 존재 자체를 지운다. 거리감은 3단계 동선적 반경(120–360cm)에서 작동하며, 일반적인 크기는 W200 × D0.5 × H300cm다.\n\nA blackout curtain erases existence entirely. It operates at the third stage of proxemic distance (120–360cm).` },
  { face:'face-right',  x:581, y:86,  label:'31', type:'material',   targetZone:'zone-e31',
    title:'스피커 (Speaker)',
    text:`스피커는 전시 목적으로 별도 반입되는 추가설비로, 전기 신호를 공기 진동으로 변환하여 소리를 발생시키는 장치다.\n\n전시 공간에서 스피커는 소리가 닿는 영역과 닿지 않는 영역 사이에 청각적 경계를 만든다. 거리감은 2단계 감상적 반경(45–120cm)에서 작동하며, 일반적인 크기는 W22 × D20 × H30cm다.\n\nA speaker creates an auditory boundary between zones the sound reaches and those it does not. It operates at the second stage of appreciative distance (45–120cm).` },
  { face:'face-right',  x:369, y:314, label:'32', type:'material',   targetZone:'zone-e32',
    title:'시트지 (Vinyl Lettering)',
    text:`시트지는 전시 목적으로 별도 반입되는 추가설비로, 접착제가 도포된 얇은 PVC 필름을 유리·벽면·바닥에 부착하여 텍스트·그래픽·패턴을 구현하는 재료다.\n\n전시 공간에서 시트지는 이 콜렉션에서 가장 얇은 물질 경계다. 거리감은 2단계 감상적 반경(45–120cm)에서 작동하며, 일반적인 치수는 W200 × H100cm(가변)다.\n\nVinyl lettering is the thinnest material boundary in this collection. It operates at the second stage of appreciative distance (45–120cm).` },
  { face:'face-right',  x:126, y:503, label:'33', type:'immaterial', targetZone:'zone-e33',
    title:'레이저 (Laser)',
    text:`레이저는 전시 목적으로 별도 반입되는 추가설비로, 단일 파장의 빛을 집중적으로 방출하여 허공에 가시적인 선을 투사하는 광학 경계 장치다.\n\n전시 공간에서 레이저는 빛이 소거되는 순간 경계 자체가 사라진다. 거리감은 4단계 시스템적 반경(360cm 이상)에서 작동하며, 일반적인 크기는 W3 × D5 × H3cm다.\n\nA laser boundary disappears the moment the light is extinguished. It operates at the fourth stage of systemic distance (360cm+).` },
  { face:'face-right',  x:314, y:519, label:'34', type:'material',   targetZone:'zone-e34',
    title:'단방향 거울 (One-Way Mirror)',
    text:`단방향 거울은 전시 목적으로 별도 반입되는 추가설비로, 한쪽에서는 거울로, 반대쪽에서는 유리로 작동하는 특수 유리다.\n\n전시 공간에서 단방향 거울은 보는 방향에 따라 경계의 성격이 완전히 달라진다. 거리감은 2단계 감상적 반경(45–120cm)에서 작동하며, 일반적인 크기는 W50 × D1 × H100cm다.\n\nA one-way mirror changes its character entirely depending on the direction from which it is viewed. It operates at the second stage of appreciative distance (45–120cm).` },

  // 바닥
  { face:'face-bottom', x:241, y:118, label:'35', type:'material',   targetZone:'zone-e35',
    title:'멀티탭 (Power Strip)',
    text:`멀티탭은 전시 목적으로 별도 반입되는 추가설비로, 하나의 전원 플러그에서 여러 개의 콘센트를 분기하여 다수의 전기 기기에 전력을 공급하는 장치다.\n\n전시 공간에서 멀티탭은 전기 장치들이 밀집하는 지점을 만들어 간접적으로 공간의 구역을 규정한다. 거리감은 4단계 시스템적 반경(360cm 이상)에서 작동하며, 일반적인 크기는 W200 × D7 × H5cm다.\n\nA power strip indirectly defines spatial zones by creating points of concentration for electrical devices.` },
  { face:'face-bottom', x:778, y:259, label:'36', type:'material',   targetZone:'zone-e36',
    title:'의자 (Chair)',
    text:`의자는 전시 목적으로 별도 반입되는 추가설비로, 한 사람이 앉을 수 있도록 설계된 등받이가 있는 좌석 가구다.\n\n전시 공간에서 의자는 앉는 행위 자체가 관람의 방식을 변환시키는 경계 장치다. 거리감은 2·3단계(45–360cm)에서 작동하며, 일반적인 크기는 W50 × D50 × H70cm다.\n\nA chair transforms the mode of viewing through the act of sitting itself. It operates at the second and third stages of proxemic distance (45–360cm).` },
  { face:'face-bottom', x:481, y:550, label:'38', type:'material',   targetZone:'zone-e37',
    title:'벨트형 차단봉 (Retractable Barrier)',
    text:`벨트형 차단봉은 전시 목적으로 별도 반입되는 추가설비로, 금속 기둥에 수납된 벨트를 인출하여 관람객의 이동을 제한하는 경계 장치다.\n\n전시 공간에서 벨트형 차단봉은 벨트의 물리적 저항은 미약하지만 관람객은 강한 심리적 부담을 느낀다. 거리감은 3단계 동선적 반경(120–360cm)에서 작동하며, 일반적인 크기는 W100 × D15 × H70cm다.\n\nA retractable barrier creates strong psychological pressure despite minimal physical resistance. It operates at the third stage of proxemic distance (120–360cm).` },
  { face:'face-bottom', x:481, y:471, label:'39', type:'material',   targetZone:'zone-e38',
    title:'마스킹 테이프 (Masking Tape)',
    text:`마스킹 테이프는 전시 목적으로 별도 반입되는 추가설비로, 얇고 찢어지기 쉬운 종이와 쉽게 떼어지는 점착제로 만든 표면 경계 장치다.\n\n전시 공간에서 마스킹 테이프는 물리적 저항 없이 심리적 구역을 설정한다. 거리감은 1단계 신체적 반경(0–45cm)에서 작동하며, 일반적인 크기는 W5 × D7cm다.\n\nMasking tape establishes a psychological zone without any physical resistance. It operates at the first stage of intimate distance (0–45cm).` },
  { face:'face-bottom', x:296, y:361, label:'40', type:'material',   targetZone:'zone-e39',
    title:'물품 보관함 (Locker)',
    text:`물품 보관함은 전시장에 기본적으로 설치되는 기초설비로, 관람객의 소지품을 일시적으로 보관하는 잠금 장치가 달린 수납 구조물이다.\n\n전시 공간에서 물품 보관함은 관람객이 소지품을 맡기고 진입하는 의례적 경계를 형성한다. 거리감은 3단계 동선적 반경(120–360cm)에서 작동하며, 일반적인 크기는 W120 × D50 × H170cm다.\n\nA locker forms a ritual gateway through which visitors pass by leaving their belongings behind.` },
  { face:'face-bottom', x:889, y:393, label:'41', type:'material',   targetZone:'zone-e40',
    title:'바닥 카펫 (Floor Carpet)',
    text:`바닥 카펫은 전시 목적으로 별도 반입되는 추가설비로, 양의 털·목화·비단 등으로 만든 직물로 바닥에 깔아 사용하는 섬유 소재의 경계 장치다.\n\n전시 공간에서 바닥 카펫은 발걸음 소리를 흡수하여 공간의 음향 밀도를 낮추고 보행 속도를 자연스럽게 늦춘다. 거리감은 2·3단계(45–360cm)에서 작동하며, 일반적인 크기는 W150 × D150 × H1cm다.\n\nA floor carpet absorbs footstep sounds and naturally slows walking pace. It operates at the second and third stages of proxemic distance (45–360cm).` },
  { face:'face-bottom', x:1093,y:440, label:'45', type:'immaterial', targetZone:'zone-e41',
    title:'공기청정기 (Air Purifier)',
    text:`공기청정기는 전시장에 기본적으로 설치되는 기초설비로, 팬을 통해 공기를 흡입하고 필터를 거쳐 정화된 공기를 방출하는 장치다.\n\n전시 공간에서 공기청정기가 작동하는 구역은 냄새와 공기 질의 차이를 통해 감지되는 경계가 형성된다. 거리감은 1단계 신체적 반경(0–45cm)에서 작동하며, 일반적인 크기는 W40 × D40 × H50cm다.\n\nAn air purifier creates boundaries through differences in odor and air quality.` },
  { face:'face-bottom', x:741, y:487, label:'46', type:'material',   targetZone:'zone-e42',
    title:'벤치 (Bench)',
    text:`벤치는 전시 목적으로 별도 반입되는 추가설비로, 등받이 없이 여러 사람이 나란히 앉을 수 있는 긴 형태의 좌석이다.\n\n전시 공간에서 벤치는 앉는 방향과 배치 각도에 따라 관람객의 시선과 동선이 결정된다. 거리감은 2·3단계(45–360cm)에서 작동하며, 일반적인 크기는 W200 × D40 × H70cm다.\n\nA bench determines visitor sightlines and movement routes through its direction and placement angle.` },
  { face:'face-bottom', x:1093,y:259, label:'47', type:'material',   targetZone:'zone-e43',
    title:'책장 (Bookshelf)',
    text:`책장은 전시 목적으로 별도 반입되는 추가설비로, 선반을 층층이 배열하여 책이나 오브제를 진열하는 구조물이다.\n\n전시 공간에서 책장은 불투명한 면은 시각을 차단하고 개방된 선반 사이로 반대편이 부분적으로 보이는 반투과적 경계를 만든다. 거리감은 3단계 동선적 반경(120–360cm)에서 작동하며, 일반적인 크기는 W120 × D30 × H170cm다.\n\nA bookshelf creates a semi-transparent boundary. It operates at the third stage of proxemic distance (120–360cm).` },
  { face:'face-bottom', x:1093,y:196, label:'48', type:'material',   targetZone:'zone-',
    title:'행거 (Clothes Rack)',
    text:`행거는 전시 목적으로 별도 반입되는 추가설비로, 옷이나 오브제를 매달아 진열하거나 보관하는 수직 구조물이다.\n\n전시 공간에서 행거는 매달린 오브제들이 불규칙한 면을 형성하며 공간을 구분한다. 거리감은 3단계 동선적 반경(120–360cm)에서 작동하며, 일반적인 크기는 W100 × D50 × H120cm다.\n\nA clothes rack divides space through an irregular surface formed by hung objects. It operates at the third stage of proxemic distance (120–360cm).` },
];

/* ─────────────────────────────────────────
   5. 추가설비 렌더링
───────────────────────────────────────── */
EXTRA_DATA.forEach(item => {
  const faceEl = document.getElementById(item.face);
  if (!faceEl) return;
  const el = document.createElement('span');
  el.className = `extra-item ${item.type}`;
  el.style.left = item.x + 'px';
  el.style.top  = item.y + 'px';
  el.textContent = item.label;
  el.addEventListener('click', e => {
    e.stopPropagation();
    activateZone({ id: item.face + '_' + item.label, targetZone: item.targetZone,
                   title: item.title, img: item.img, text: item.text });
  });
  faceEl.appendChild(el);
});

/* ─────────────────────────────────────────
   6. 동기화 스크롤 엔진
───────────────────────────────────────── */
function activateZone(btn) {

  const existingZones = document.querySelectorAll(`.dynamic-zone.${btn.targetZone}`);
  let isAlreadyOpen = false;
  if (existingZones.length > 0 && existingZones[0].dataset.btnId === btn.id) isAlreadyOpen = true;
  existingZones.forEach(el => el.remove());
  if (isAlreadyOpen) return;

  const parts = ZONE_DATA[btn.targetZone];
  if (!parts) return;

  let totalW = parts[0].w, totalH = parts[0].h;
  parts[0].offsetX = 0; parts[0].offsetY = 0; parts[0].isRotated = false;

for (let i = 1; i < parts.length; i++) {
  const c = parts[i], p = parts[i - 1];

  if (c.h === p.h && c.w !== p.w) {
    c.isRotated = false; c.offsetX = p.offsetX + p.w; c.offsetY = p.offsetY;
    totalW = Math.max(totalW, c.offsetX + c.w);
  } 
  else if (c.w === p.w) {
    c.isRotated = false; c.offsetX = p.offsetX; c.offsetY = p.offsetY + p.h;
    totalH = Math.max(totalH, c.offsetY + c.h);
  } 
  else if (p.w === c.h) {
    c.isRotated = true;
    c.offsetX = p.offsetX; 
    c.offsetY = p.offsetY + p.h; // 다음 줄로 자연스럽게 넘김

    if (p.face === 'face-left' && c.face === 'face-bottom') {
      c.rotationAngle = -90; 
      c.postX = 0;
      c.postY = c.h; 
    } else {
      c.rotationAngle = 90;
      c.postX = c.w;
      c.postY = 0;
    }
    totalH = Math.max(totalH, c.offsetY + c.w);
  } 
  // 4. 측면 코너 가로 연결 (두 면의 두께가 같을 때)
  else if (p.h === c.w) {
    c.isRotated = true;
    c.offsetX = p.offsetX + p.w; 
    c.offsetY = p.offsetY;

    if (p.face === 'face-left' && c.face === 'face-bottom') {
      c.rotationAngle = -90;
      c.postX = 0;
      c.postY = c.h;
    } else {
      c.rotationAngle = 90;
      c.postX = c.w;
      c.postY = 0;
    }
    totalW += c.h;
  } 
  // 5. 기타 예외
  else {
    c.isRotated = false; c.offsetX = p.offsetX; c.offsetY = p.offsetY;
  }
}
  const maxW = Math.max(totalW, ...parts.map(p => p.isRotated ? p.h : p.w));

  const hidden = document.createElement('div');
  hidden.style.cssText = `visibility:hidden;position:absolute;width:${maxW}px`;
  hidden.innerHTML = `<div class="zc"><div class="zt">${btn.title}</div><div class="zx">${(btn.text||'').replace(/\n/g,'<br>')}</div></div>`;
  document.body.appendChild(hidden);

  function render() {
    const docH = hidden.scrollHeight;
    if (document.body.contains(hidden)) document.body.removeChild(hidden);

    let scroll = 0;
    const group = [];
    const vpH = parts[0].h;

    parts.forEach(part => {
      const faceEl = document.getElementById(part.face);
      if (!faceEl) return;

      const zEl = document.createElement('div');
      zEl.className = `dynamic-zone ${btn.targetZone}`;
      zEl.dataset.btnId = btn.id;
      zEl.id = 'print-zone';  


      zEl.style.cssText = `left:${part.x}px;top:${part.y}px;width:${part.w}px;height:${part.h}px;overflow:hidden;background:rgba(255,255,255,0.08)`;

      let content = `<div class="zc" style="width:${maxW}px;position:absolute;left:0;top:0;transform-origin:0 0">`;
      if (btn.img) content += `<img src="${btn.img}" class="zi">`;
      content += `<div class="zt">${btn.title}</div><div class="zx">${(btn.text||'').replace(/\n/g,'<br>')}</div></div>`;
      zEl.innerHTML = content;

      const inner = zEl.querySelector('.zc');
      
      group.push({ 
        el: inner, 
        sX: part.offsetX, 
        sY: part.offsetY, 
        isRotated: part.isRotated, 
        rotAngle: part.rotationAngle || 90,
        postX: part.postX !== undefined ? part.postX : (part.isRotated ? part.w : 0),
        postY: part.postY || 0 
      });

      inner.style.transform = part.isRotated
        ? `translate(${part.postX !== undefined ? part.postX : part.w}px, ${part.postY || 0}px) rotate(${part.rotationAngle || 90}deg) translate(-${part.offsetX}px,-${part.offsetY}px)`
        : `translate(-${part.offsetX}px,-${part.offsetY}px)`;

      zEl.addEventListener('wheel', e => {
        e.preventDefault();
        const maxScroll = Math.max(0, docH - vpH);
        scroll = Math.max(0, Math.min(scroll + e.deltaY, maxScroll));
        group.forEach(g => {
          g.el.style.transform = g.isRotated
            ? `translate(${g.postX}px, ${g.postY}px) rotate(${g.rotAngle}deg) translate(-${g.sX}px,calc(-${g.sY}px - ${scroll}px))`
            : `translate(-${g.sX}px,calc(-${g.sY}px - ${scroll}px))`;
        });
      });

      zEl.addEventListener('click', e => e.stopPropagation());
      // 항목 이름 업데이트
      const nameEl = document.getElementById('ui-item-name');
      if (nameEl) {
        const match = btn.title.match(/\((.+)\)/);
        nameEl.textContent = match ? match[1].toUpperCase() : btn.title.toUpperCase();
      }
      faceEl.appendChild(zEl);
    });
  }

  const img = hidden.querySelector('img');
  if (img && !img.complete) { img.onload = render; img.onerror = render; } else { render(); }
}

window.addEventListener('beforeprint', () => {
  const zone = document.getElementById('print-zone');
  if (!zone) return;
  const clone = zone.cloneNode(true);
  clone.id = 'print-clone';
  clone.style.cssText = '';
  const zc = clone.querySelector('.zc');
  if (zc) {
    const w = zone.querySelector('.zc') 
      ? zone.querySelector('.zc').style.width 
      : '450px';
    zc.style.width = w;
  }
  document.body.appendChild(clone);
});

window.addEventListener('afterprint', () => {
  const clone = document.getElementById('print-clone');
  if (clone) clone.remove();
});


if (nameEl) {
  const match = btn.title.match(/\((.+)\)/);
if (match) {
  nameEl.textContent = match[1].toUpperCase();
} else {
  nameEl.textContent = btn.title.toUpperCase();
}
}

function triggerPrint() {
  const zone = document.getElementById('print-zone');
  if (!zone) { alert('먼저 항목을 선택해주세요.'); return; }
  window.print();
}