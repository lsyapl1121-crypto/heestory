import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Webtoon {
  id: number;
  title: string;
  genreLabel: string;
  author: string;
  description: string;
  views: string;
  rating: number;
  badge: string;
  coverArt: React.ReactNode;
}

const WEBTOONS: Webtoon[] = [
  {
    id: 1,
    title: "용의 눈을 가진 검사",
    genreLabel: "판타지 / 액션",
    author: "글 스토리크루 · 그림 아티잔",
    description: "봉인된 고대 멸악룡의 붉은 안구를 이식받은 검사 이안. 대륙을 집어삼키려는 마왕군에 맞서 각성한 마검의 칼날을 겨눈다!",
    views: "1.2억회",
    rating: 9.94,
    badge: "글로벌 1위",
    coverArt: (
      <svg className="w-full h-full object-cover" viewBox="0 0 400 600" fill="none">
        <defs>
          <linearGradient id="bg_char1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e1b4b" />
            <stop offset="50%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>
          <linearGradient id="blade_energy" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>
          <radialGradient id="dragonEye_glow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#991b1b" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* 배경 & 검기 이펙트 */}
        <rect width="400" height="600" fill="url(#bg_char1)" />
        <path d="M-50 400 L450 150 L400 100 L-100 350 Z" fill="url(#blade_energy)" opacity="0.35" />
        <path d="M-20 480 L420 230" stroke="#38bdf8" strokeWidth="4" opacity="0.8" />
        
        {/* 남주인공: 판타지 검사 얼굴 (네이버웹툰 스타일) */}
        {/* 목 & 갑옷 카라 */}
        <path d="M160 380 L160 490 L240 490 L240 380 Z" fill="#fcd34d" opacity="0.1" />
        <path d="M150 420 L200 470 L250 420 L270 540 L130 540 Z" fill="#1e293b" stroke="#ca8a04" strokeWidth="2" />
        <path d="M170 340 L200 400 L230 340 Z" fill="#fed7aa" />
        
        {/* 얼굴 윤곽 */}
        <polygon points="135,220 150,300 200,360 250,300 265,220 200,190" fill="#ffedd5" />
        {/* 볼 & 턱 쉐딩 */}
        <polygon points="150,300 200,360 250,300 230,340 200,355 170,340" fill="#fed7aa" />

        {/* 흑발 & 샤프한 웹툰 헤어스타일 */}
        <path d="M120 230 Q140 130 200 130 Q260 130 280 230 Q290 290 280 320 L265 240 Q250 170 200 170 Q150 170 135 240 L120 320 Z" fill="#0f172a" />
        {/* 앞머리 가닥들 */}
        <path d="M130 180 L160 270 L175 220 L200 290 L225 210 L245 270 L270 180 Z" fill="#1e293b" />
        <path d="M150 170 L180 250 L195 200 L210 260 L235 180 Z" fill="#090d16" />

        {/* 날카로운 눈매 (좌: 정상안 / 우: 각성한 붉은 용의 눈) */}
        {/* 왼쪽 눈 */}
        <path d="M155 245 Q175 235 185 250 Q170 255 155 245 Z" fill="#0f172a" />
        <circle cx="172" cy="246" r="3.5" fill="#38bdf8" />
        <circle cx="174" cy="244" r="1.2" fill="#ffffff" />
        {/* 오른쪽 각성 붉은 용의 눈 (흉터 + 오라) */}
        <circle cx="228" cy="246" r="18" fill="url(#dragonEye_glow)" />
        <line x1="228" y1="220" x2="228" y2="270" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
        <path d="M215 250 Q225 235 245 245 Q230 255 215 250 Z" fill="#450a0a" stroke="#ef4444" strokeWidth="1" />
        <ellipse cx="228" cy="246" rx="3.5" ry="5" fill="#fef08a" />
        <ellipse cx="228" cy="246" rx="1.5" ry="4" fill="#dc2626" />

        {/* 오똑한 코 & 굳게 다문 입술 */}
        <path d="M198 275 L203 295 L196 298" stroke="#fba77a" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M188 322 Q200 326 212 322" stroke="#e17a55" strokeWidth="2.5" strokeLinecap="round" />

        {/* 하단 타이틀 영역 */}
        <rect y="480" width="400" height="120" fill="url(#card_bottom_grad)" />
      </svg>
    )
  },
  {
    id: 2,
    title: "천재 연금술사의 만능 샵",
    genreLabel: "현대 판타지 / 힐링",
    author: "글 히스토리 · 그림 앨리스",
    description: "차원 게이트 앞 골든 포션 전문 샵의 천재 안경 미소녀 연금술사! 전 세계 SS급 헌터들이 그녀의 포션을 구하기 위해 줄을 선다.",
    views: "8,500만회",
    rating: 9.88,
    badge: "드라마화 확정",
    coverArt: (
      <svg className="w-full h-full object-cover" viewBox="0 0 400 600" fill="none">
        <defs>
          <linearGradient id="bg_char2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#064e3b" />
            <stop offset="50%" stopColor="#022c22" />
            <stop offset="100%" stopColor="#061a14" />
          </linearGradient>
          <radialGradient id="sparkle_alchemy" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#34d399" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#064e3b" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="600" fill="url(#bg_char2)" />
        <circle cx="280" cy="180" r="100" fill="url(#sparkle_alchemy)" />

        {/* 여주인공: 귀여운 안경 연금술사 캐릭터 얼굴 */}
        <polygon points="145,230 155,300 200,355 245,300 255,230 200,205" fill="#fff7ed" />
        <polygon points="155,300 200,355 245,300 230,335 200,350 170,335" fill="#fed7aa" />

        {/* 산뜻한 민트/에메랄드빛 단발 웨이브 헤어 */}
        <path d="M125 210 Q140 120 200 120 Q260 120 275 210 Q290 280 270 350 L250 340 Q260 280 255 220 Q240 160 200 160 Q160 160 145 220 Q140 280 150 340 L130 350 Z" fill="#059669" />
        {/* 뱅 앞머리 */}
        <path d="M140 170 Q200 190 260 170 L255 230 Q200 245 145 230 Z" fill="#10b981" />
        <path d="M165 230 L175 260 L185 230 M215 230 L225 260 L235 230" stroke="#059669" strokeWidth="2" />

        {/* 둥근 골드 테 안경 */}
        <circle cx="170" cy="255" r="18" stroke="#fbbf24" strokeWidth="3" fill="none" />
        <circle cx="230" cy="255" r="18" stroke="#fbbf24" strokeWidth="3" fill="none" />
        <line x1="188" y1="255" x2="212" y2="255" stroke="#fbbf24" strokeWidth="3" />

        {/* 초롱초롱한 에메랄드 눈망울 */}
        <circle cx="170" cy="255" r="8" fill="#047857" />
        <circle cx="170" cy="255" r="5" fill="#34d399" />
        <circle cx="168" cy="252" r="2.5" fill="#ffffff" />
        <circle cx="230" cy="255" r="8" fill="#047857" />
        <circle cx="230" cy="255" r="5" fill="#34d399" />
        <circle cx="228" cy="252" r="2.5" fill="#ffffff" />

        {/* 홍조 & 미소 */}
        <ellipse cx="150" cy="285" rx="8" ry="4" fill="#f43f5e" opacity="0.4" />
        <ellipse cx="250" cy="285" rx="8" ry="4" fill="#f43f5e" opacity="0.4" />
        <path d="M192 315 Q200 325 208 315" stroke="#f43f5e" strokeWidth="2.5" strokeLinecap="round" />

        {/* 마법 포션 병을 들고 있는 손 */}
        <g transform="translate(230, 360)">
          <path d="M20 0 L40 0 L40 15 L55 50 C60 65 50 80 30 80 C10 80 0 65 5 50 L20 15 Z" fill="#10b981" stroke="#facc15" strokeWidth="3" opacity="0.9" />
          <circle cx="30" cy="55" r="6" fill="#fef08a" />
        </g>
      </svg>
    )
  },
  {
    id: 3,
    title: "내 연애는 로딩 중",
    genreLabel: "로맨스 코미디",
    author: "글/그림 핑크문 Studio",
    description: "게임 속 랭킹 1위 길드마스터와 까칠하고 잘생긴 본부장님의 앙큼살벌 사내 밀당 로맨스!",
    views: "6,400만회",
    rating: 9.91,
    badge: "독점 연재",
    coverArt: (
      <svg className="w-full h-full object-cover" viewBox="0 0 400 600" fill="none">
        <defs>
          <linearGradient id="bg_char3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4c0519" />
            <stop offset="50%" stopColor="#1f121d" />
            <stop offset="100%" stopColor="#0c070e" />
          </linearGradient>
          <radialGradient id="pink_glow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#fb7185" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#881337" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="600" fill="url(#bg_char3)" />
        <circle cx="200" cy="200" r="160" fill="url(#pink_glow)" />

        {/* 남주인공: 로맨스 웹툰 스타일 훈남 본부장 얼굴 */}
        <path d="M165 370 L165 470 L235 470 L235 370 Z" fill="#fed7aa" />
        {/* 화이트 셔츠 & 블랙 타이/수트 */}
        <path d="M140 430 L200 470 L260 430 L280 550 L120 550 Z" fill="#0f172a" />
        <polygon points="175,430 200,470 225,430 215,480 185,480" fill="#ffffff" />
        <polygon points="195,445 205,445 208,520 192,520" fill="#e11d48" />

        {/* 날렵한 V라인 얼굴 */}
        <polygon points="140,225 155,295 200,355 245,295 260,225 200,200" fill="#fff7ed" />
        <polygon points="155,295 200,355 245,295 230,335 200,350 170,335" fill="#fde68a" opacity="0.5" />

        {/* 쉼표머리 스타일 브라운/애쉬 블랙 헤어 */}
        <path d="M125 220 Q145 125 200 125 Q255 125 275 220 L265 260 Q255 160 200 160 Q145 160 135 260 Z" fill="#1c1917" />
        {/* 자연스러운 가르마 & 쉼표 앞머리 컬 */}
        <path d="M135 170 Q170 170 180 245 Q165 245 150 210 Z" fill="#292524" />
        <path d="M185 165 Q230 165 240 250 Q255 220 265 175 Z" fill="#292524" />

        {/* 깊고 그윽한 눈빛 & 속눈썹 */}
        <path d="M155 245 Q172 235 185 248" stroke="#1c1917" strokeWidth="2.5" strokeLinecap="round" />
        <ellipse cx="170" cy="252" rx="4" ry="5" fill="#4c0519" />
        <circle cx="171" cy="250" r="1.5" fill="#ffffff" />

        <path d="M215 248 Q228 235 245 245" stroke="#1c1917" strokeWidth="2.5" strokeLinecap="round" />
        <ellipse cx="230" cy="252" rx="4" ry="5" fill="#4c0519" />
        <circle cx="229" cy="250" r="1.5" fill="#ffffff" />

        {/* 오똑한 콧날 & 매력적인 입꼬리 */}
        <path d="M198 265 L203 290 L196 294" stroke="#fba77a" strokeWidth="2" strokeLinecap="round" />
        <path d="M190 322 Q200 324 212 318" stroke="#e11d48" strokeWidth="2.5" strokeLinecap="round" />

        {/* 핑크빛 반짝이 & 게임 하트 아이콘 */}
        <path d="M290 140 Q305 120 320 140 Q335 160 290 195 Q245 160 260 140 Q275 120 290 140 Z" fill="#f43f5e" opacity="0.8" />
      </svg>
    )
  },
  {
    id: 4,
    title: "그림자 제국의 흑막 영애",
    genreLabel: "로맨스 판타지",
    author: "글 벨라 · 그림 로판 랩",
    description: "시한부 악녀로 빙의한 은발의 대공 영애 엘레나. 우아하고 치명적인 지략으로 황실 전체를 손바닥 위에 올려놓는다.",
    views: "9,800만회",
    rating: 9.96,
    badge: "글로벌 톱5",
    coverArt: (
      <svg className="w-full h-full object-cover" viewBox="0 0 400 600" fill="none">
        <defs>
          <linearGradient id="bg_char4" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2e1065" />
            <stop offset="50%" stopColor="#1e1b4b" />
            <stop offset="100%" stopColor="#090514" />
          </linearGradient>
          <radialGradient id="purple_magic" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#c084fc" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#2e1065" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="600" fill="url(#bg_char4)" />
        <circle cx="200" cy="190" r="170" fill="url(#purple_magic)" />

        {/* 화려한 황실 드레스 넥라인 & 루비 목걸이 */}
        <path d="M165 370 L165 440 L235 440 L235 370 Z" fill="#fdf2f8" />
        <path d="M130 430 Q200 480 270 430 L290 550 L110 550 Z" fill="#3b0764" stroke="#eab308" strokeWidth="2" />
        {/* 목걸이 & 물방울 보석 */}
        <path d="M170 405 Q200 425 230 405" stroke="#facc15" strokeWidth="2.5" fill="none" />
        <ellipse cx="200" cy="425" rx="6" ry="9" fill="#dc2626" stroke="#fef08a" strokeWidth="1.5" />

        {/* 여주인공: 매혹적인 은발 악녀 영애 얼굴 */}
        <polygon points="145,225 155,295 200,350 245,295 255,225 200,200" fill="#fff1f2" />

        {/* 풍성하고 화려한 은발 롱 웨이브 헤어 */}
        <path d="M110 210 Q140 100 200 100 Q260 100 290 210 Q315 320 285 450 L255 430 Q275 320 260 220 Q240 145 200 145 Q160 145 140 220 Q125 320 145 430 L115 450 Q85 320 110 210 Z" fill="#e2e8f0" />
        <path d="M140 160 Q170 160 185 240 Q200 160 230 160 Q245 200 255 240" stroke="#cbd5e1" strokeWidth="3" fill="none" />

        {/* 골드 & 보석 티아라 (왕관) */}
        <polygon points="160,140 180,110 200,145 220,110 240,140" fill="#facc15" stroke="#fef08a" strokeWidth="1" />
        <circle cx="200" cy="135" r="3.5" fill="#dc2626" />

        {/* 도도하고 날카로운 고양이상 보랏빛 눈매 */}
        <path d="M152 240 Q172 230 186 242 Q170 250 152 240 Z" fill="#1e1b4b" />
        <ellipse cx="170" cy="242" rx="4.5" ry="5.5" fill="#9333ea" />
        <ellipse cx="170" cy="242" rx="2" ry="4" fill="#f3e8ff" />
        <circle cx="168" cy="239" r="1.5" fill="#ffffff" />
        {/* 아이라인 꼬리 샥 */}
        <path d="M184 240 L190 234" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />

        <path d="M214 242 Q228 230 248 240 Q230 250 214 242 Z" fill="#1e1b4b" />
        <ellipse cx="230" cy="242" rx="4.5" ry="5.5" fill="#9333ea" />
        <ellipse cx="230" cy="242" rx="2" ry="4" fill="#f3e8ff" />
        <circle cx="228" cy="239" r="1.5" fill="#ffffff" />
        <path d="M246 240 L252 234" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />

        {/* 붉은 립 & 매혹적인 미소 */}
        <path d="M198 265 L202 288 L196 292" stroke="#f472b6" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M190 318 Q200 326 210 318" stroke="#be123c" strokeWidth="3" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: 5,
    title: "무림 레벨업 센터",
    genreLabel: "무협 / 현대 액션",
    author: "글 강호 · 그림 무극",
    description: "화산파의 붉은 매화검존이 현대 강남 헌터 시험장에 강림했다. 압도적인 무공 수련으로 현대 헌터 랭킹 1위를 탈환한다!",
    views: "1.5억회",
    rating: 9.95,
    badge: "게임화 확정",
    coverArt: (
      <svg className="w-full h-full object-cover" viewBox="0 0 400 600" fill="none">
        <defs>
          <linearGradient id="bg_char5" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#450a0a" />
            <stop offset="50%" stopColor="#18181b" />
            <stop offset="100%" stopColor="#09090b" />
          </linearGradient>
          <radialGradient id="flame_aura" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#ef4444" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="600" fill="url(#bg_char5)" />
        <circle cx="200" cy="210" r="160" fill="url(#flame_aura)" />

        {/* 휘날리는 붉은 매화 꽃잎 이펙트 */}
        <ellipse cx="120" cy="160" rx="12" ry="6" fill="#f43f5e" transform="rotate(-30 120 160)" />
        <ellipse cx="280" cy="140" rx="14" ry="7" fill="#fb7185" transform="rotate(40 280 140)" />
        <ellipse cx="260" cy="270" rx="10" ry="5" fill="#f43f5e" transform="rotate(15 260 270)" />

        {/* 동양풍 무사 복장 & 붉은 깃 카라 */}
        <path d="M165 370 L165 480 L235 480 L235 370 Z" fill="#fed7aa" />
        <path d="M140 430 L200 475 L260 430 L280 550 L120 550 Z" fill="#18181b" stroke="#ef4444" strokeWidth="2.5" />
        <path d="M170 430 L200 475 L180 550" stroke="#f59e0b" strokeWidth="2" />

        {/* 날카롭고 다부진 턱선 */}
        <polygon points="135,225 150,295 200,355 250,295 265,225 200,195" fill="#ffedd5" />
        <polygon points="150,295 200,355 250,295 235,335 200,350 165,335" fill="#fed7aa" />

        {/* 흩날리는 와일드 롱 흑발 & 붉은 머리끈 */}
        <path d="M115 230 Q140 115 200 115 Q260 115 285 230 Q305 340 280 430 L255 410 Q270 310 260 210 Q240 150 200 150 Q160 150 140 210 Q130 310 145 410 L120 430 Z" fill="#09090b" />
        {/* 이마의 붉은 화산파 인장 */}
        <path d="M195 205 Q200 190 205 205 Q200 215 195 205 Z" fill="#ef4444" />

        {/* 살기 넘치는 카리스마 맹렬한 눈매 */}
        <path d="M152 245 L185 240 Q170 255 152 245 Z" fill="#09090b" />
        <ellipse cx="170" cy="245" rx="4" ry="4.5" fill="#ea580c" />
        <circle cx="170" cy="245" r="1.5" fill="#fef08a" />
        {/* 짙은 검미 (무협 눈썹) */}
        <polygon points="145,230 185,225 180,232 148,235" fill="#09090b" />

        <path d="M215 240 L248 245 Q230 255 215 240 Z" fill="#09090b" />
        <ellipse cx="230" cy="245" rx="4" ry="4.5" fill="#ea580c" />
        <circle cx="230" cy="245" r="1.5" fill="#fef08a" />
        <polygon points="215,225 255,230 252,235 220,232" fill="#09090b" />

        {/* 오똑한 코 & 자신만만한 입꼬리 */}
        <path d="M198 268 L203 292 L195 296" stroke="#fba77a" strokeWidth="2" strokeLinecap="round" />
        <path d="M188 322 Q200 324 212 316" stroke="#b91c1c" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    )
  }
];

const NAV = [
  { id: 'hero', label: 'HOME' },
  { id: 'works', label: 'WORKS' },
  { id: 'vision', label: 'VISION' },
  { id: 'business', label: 'BUSINESS' },
  { id: 'contact', label: 'CONTACT' }
] as const;

const VISION = [
  { key: 'DISCOVER', body: '새로운 작가와 이야기를 발견합니다.' },
  { key: 'DEVELOP', body: '작가와 함께 작품의 가능성을 키워갑니다.' },
  { key: 'CONNECT', body: '작품과 독자, 시장을 연결합니다.' },
  { key: 'EXPAND', body: '웹툰을 넘어 다양한 IP로 확장합니다.' }
];

const BUSINESS = [
  {
    title: '발견',
    items: [
      { h: '작가 발굴', p: '투고, 공모전, SNS 등을 통한 신규 작가 투고 및 리쿠르팅' },
      { h: 'IP 발굴', p: '웹소설, 소설, 게임 등 웹툰화(노블코믹스)가 가능한 우수 원작 소설 검토' }
    ]
  },
  {
    title: '제작',
    items: [
      { h: '분업화', p: '스토리 콘티, 프로젝트 기획 등 분야별 전문 인력 배치' },
      { h: '스케줄 및 공정 관리', p: '정기적인 마감 수립 및 작가 일정 관리를 통한 안정적인 연재 환경 조성' }
    ]
  },
  {
    title: '편집',
    items: [
      { h: '디렉팅 및 피드백', p: '대사, 가독성, 연출 흐름 및 대사 배치 검수' },
      { h: '식자 및 타이포그래피', p: '타이틀 로고, 대사 폰트, 효과음 디자인 등 최적의 시각적 가공' }
    ]
  },
  {
    title: '유통',
    items: [
      { h: '국내외 플랫폼 연재', p: '네이버, 카카오등 국내 주요 플랫폼 계약' },
      { h: '프로모션 및 마케팅', p: '메인 노출(배너), 상위 노출 마케팅 및 프로모션 협의' }
    ]
  }
];

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeNav, setActiveNav] = useState('hero');

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % WEBTOONS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + WEBTOONS.length) % WEBTOONS.length);
  };

  const goTo = (id: string) => {
    setActiveNav(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#FFE100] selection:text-black overflow-x-hidden md:snap-y md:snap-mandatory">
      <header className="fixed top-0 left-0 right-0 z-50 h-[65px] px-4 md:px-7 flex items-center justify-between gap-4 bg-black/45 backdrop-blur-md border-b border-[#FFE100]/20">
        <button onClick={() => goTo('hero')} className="h-12 shrink-0 bg-transparent border-0 p-0 cursor-pointer" aria-label="HEESTORY HOME">
          <img src="heestory-logo.jpg" alt="HEESTORY" className="h-11 w-[170px] object-cover object-center block" />
        </button>
        <nav className="flex items-center gap-1.5 overflow-x-auto">
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => goTo(item.id)}
              className={`font-mono text-[10px] md:text-[11px] font-bold tracking-wider px-2.5 md:px-3 py-1.5 border cursor-pointer whitespace-nowrap transition-colors ${
                activeNav === item.id
                  ? 'bg-[#FFE100] text-black border-[#FFE100]'
                  : 'bg-transparent text-neutral-400 border-neutral-700 hover:border-[#FFE100] hover:text-[#FFE100]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </header>

      <section id="hero" className="relative h-svh max-h-svh flex flex-col items-center justify-center text-center px-6 pt-[65px] snap-start">
        <div className="inline-block mb-7 px-4 py-1.5 font-mono text-[10px] md:text-[11px] tracking-[0.28em] text-[#FFE100] bg-[#FFE100]/12 border border-[#FFE100]/45">
          [ HEESTORY WEBTOON AGENCY ]
        </div>
        <h1 className="font-black text-[clamp(1.8rem,5.6vw,4.6rem)] leading-[1.12] mb-6">
          <span className="block">당신의 이야기는</span>
          <span className="block mt-1.5 text-[#FFE100]" style={{ textShadow: '0 0 28px rgba(255,225,0,.45), 0 0 64px rgba(255,225,0,.2)' }}>
            우리의 세계가 된다
          </span>
        </h1>
        <p className="max-w-xl text-neutral-400 text-[clamp(.9rem,1.5vw,1.08rem)] leading-relaxed">
          HEESTORY는 작가의 고유한 시선과 새로운 이야기를 발견하고, 함께 성장하며 더 넓은 세상으로 연결합니다.
        </p>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[9px] tracking-[0.3em] text-neutral-500">
          <span>SCROLL</span>
          <div className="w-px h-9 bg-gradient-to-b from-neutral-500 to-transparent" />
        </div>
      </section>

      <section id="works" className="h-auto min-h-svh md:h-svh md:max-h-svh flex flex-col justify-center pt-[72px] pb-10 px-4 md:px-10 snap-start">
        <div className="w-full max-w-[1180px] mx-auto">
          <p className="font-mono text-[10px] tracking-[0.3em] text-[#FFE100] mb-2.5">[ WORKS ]</p>
          <h2 className="font-black text-[clamp(1.5rem,3.4vw,3rem)] leading-tight">하나의 세계가 완성되는 순간들</h2>
          <p className="text-neutral-400 text-sm mt-2.5 mb-5">우리의 HISTORY</p>

          <div className="relative h-[360px] md:h-[min(52svh,420px)] flex items-center justify-center [perspective:1400px] select-none">
            {WEBTOONS.map((item, index) => {
              const total = WEBTOONS.length;
              let offset = index - activeIndex;
              if (offset > total / 2) offset -= total;
              if (offset < -total / 2) offset += total;
              const absOffset = Math.abs(offset);
              const isActive = offset === 0;
              const translateX = offset * 210;
              const translateZ = -absOffset * 150;
              const rotateY = offset * -16;
              const opacity = absOffset > 2 ? 0 : 1 - absOffset * 0.28;
              const zIndex = 20 - absOffset;

              return (
                <div
                  key={item.id}
                  onClick={() => { if (!isActive) setActiveIndex(index); }}
                  className="absolute w-[210px] h-[320px] md:w-[240px] md:h-[min(360px,48svh)] overflow-hidden cursor-pointer border hover:brightness-110 hover:border-[#FFE100] hover:shadow-[0_0_0_2px_#FFE100,0_12px_40px_rgba(255,225,0,0.22)]"
                  style={{
                    transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg)`,
                    opacity,
                    zIndex,
                    pointerEvents: opacity === 0 ? 'none' : 'auto',
                    borderColor: isActive ? '#FFE100' : '#333',
                    borderWidth: isActive ? 2 : 1,
                    boxShadow: isActive ? '0 0 36px rgba(255,225,0,.22)' : '0 8px 30px rgba(0,0,0,.45)',
                    transition: 'transform 0.85s cubic-bezier(0.22, 1.18, 0.32, 1), opacity 0.55s cubic-bezier(0.22, 1.18, 0.32, 1), box-shadow 0.35s ease, filter 0.35s ease, border-color 0.35s ease'
                  }}
                >
                  <div className="w-full h-full relative bg-neutral-950">
                    <div className="absolute inset-0">{item.coverArt}</div>
                    <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black via-black/80 to-transparent px-4 pt-12 pb-4">
                      <p className="text-[10px] font-mono text-neutral-400 mb-1">{item.author}</p>
                      <h3 className="text-white font-black text-[15px] leading-snug">{item.title}</h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-center gap-5 mt-5">
            <button
              onClick={handlePrev}
              className="w-[42px] h-[42px] border-2 border-[#FFE100] text-[#FFE100] bg-transparent flex items-center justify-center hover:bg-[#FFE100] hover:text-black transition-colors"
              aria-label="이전 작품"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-1.5">
              {WEBTOONS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-[7px] border-0 cursor-pointer transition-all duration-500 ${
                    activeIndex === idx ? 'w-7 bg-[#FFE100]' : 'w-2 bg-neutral-700'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="w-[42px] h-[42px] border-2 border-[#FFE100] text-[#FFE100] bg-transparent flex items-center justify-center hover:bg-[#FFE100] hover:text-black transition-colors"
              aria-label="다음 작품"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section id="vision" className="h-auto min-h-svh md:h-svh md:max-h-svh flex flex-col justify-center pt-[72px] pb-10 px-4 md:px-10 snap-start">
        <div className="w-full max-w-[1180px] mx-auto">
          <p className="font-mono text-[10px] tracking-[0.3em] text-[#FFE100] mb-2.5">[ VISION ]</p>
          <h2 className="font-black text-[clamp(1.4rem,3.2vw,2.8rem)] leading-snug mb-8">
            모든 이야기가 자신만의 가치를 가질 수 있도록.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {VISION.map((item) => (
              <article key={item.key} className="border border-neutral-800 bg-neutral-950 p-5 md:p-6">
                <div className="font-mono text-[11px] tracking-[0.22em] text-[#FFE100] mb-3">({item.key})</div>
                <p className="text-neutral-300 text-sm leading-relaxed">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="business" className="h-auto min-h-svh md:h-svh md:max-h-svh flex flex-col justify-center pt-[72px] pb-10 px-4 md:px-10 snap-start">
        <div className="w-full max-w-[1180px] mx-auto">
          <p className="font-mono text-[10px] tracking-[0.3em] text-[#FFE100] mb-2.5">[ BUSINESS ]</p>
          <h2 className="font-black text-[clamp(1.5rem,3.4vw,3rem)] mb-6">발견부터 유통까지</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {BUSINESS.map((col) => (
              <article key={col.title} className="border-t-[3px] border-[#FFE100] bg-neutral-950 p-4 md:p-5">
                <div className="text-[#FFE100] font-black text-xl mb-4">{col.title}</div>
                {col.items.map((item) => (
                  <div key={item.h} className="mb-4 last:mb-0">
                    <div className="text-white font-bold text-sm mb-1.5">{item.h}</div>
                    <p className="text-neutral-400 text-xs leading-relaxed">{item.p}</p>
                  </div>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="h-auto min-h-svh md:h-svh md:max-h-svh flex flex-col justify-center pt-[72px] pb-10 px-4 md:px-10 snap-start">
        <div className="w-full max-w-[1180px] mx-auto">
          <p className="font-mono text-[10px] tracking-[0.3em] text-[#FFE100] mb-2.5">[ CONTACT ]</p>
          <h2 className="font-black text-[clamp(1.5rem,3.4vw,3rem)] mb-6">함께 만들어요.</h2>
          <div className="grid grid-cols-1 md:grid-cols-[1.15fr_.85fr] gap-8 items-stretch">
            <div>
              <p className="font-mono text-[10px] tracking-[0.25em] text-[#FFE100] mb-2">— LOCATION</p>
              <div className="relative w-full h-[240px] md:h-[min(46svh,380px)] bg-neutral-900 border border-neutral-800 overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?q=%EC%A4%91%EB%8F%99%EB%A1%9C254%EB%B2%88%EA%B8%B8%2090&hl=ko&z=16&output=embed"
                  title="HEESTORY LOCATION — 중동로254번길 90"
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-8">
              <div>
                <p className="font-mono text-[10px] tracking-[0.25em] text-[#FFE100] mb-2">— EMAIL</p>
                <a href="mailto:heestory@gmail.com" className="font-black text-[clamp(1.05rem,2vw,1.5rem)] text-white hover:text-[#FFE100] break-all">
                  heestory@gmail.com
                </a>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-[0.25em] text-[#FFE100] mb-2">— WORK_SPACE</p>
                <p className="font-bold text-lg">HEESTORY Agency</p>
                <p className="text-neutral-400 text-sm mt-1.5">중동로254번길 90</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t-2 border-[#FFE100] px-7 py-5 snap-start">
        <div className="max-w-[1180px] mx-auto flex items-center justify-between flex-wrap gap-4">
          <div>
            <img src="heestory-logo.jpg" alt="HEESTORY" className="h-9 w-[150px] object-cover object-center block" />
            <p className="font-mono text-[9px] tracking-wider text-neutral-500 mt-1">© 2026 HEESTORY WEBTOON AGENCY. ALL RIGHTS RESERVED.</p>
          </div>
          <nav className="flex gap-1.5 flex-wrap">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => goTo(item.id)}
                className="font-mono text-[10px] text-neutral-400 border border-neutral-700 px-2.5 py-1 bg-transparent cursor-pointer hover:border-[#FFE100] hover:text-[#FFE100]"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
