# 허브 사이트 변경 이력

## 원복 방법
GitHub에서 이전 버전으로 돌아가려면:
```
git log --oneline   # 커밋 목록 확인
git checkout [커밋ID] -- index.html   # 특정 파일만 이전 버전으로
git push
```

---

## v4 — 2026-03-11 (현재)
**커밋**: `66f6d08`
- 로고: 이모지 → SVG (집+하트+회전 점 4개)
- 수학왕국: 왕관+움직이는 글자 (`정수·유리수` 마키 텍스트) 추가
- 수학탐정수사국 카드 추가 (`방정식의 활용` 라벨, 금색 테마)

---

## v3 — 2026-03-11
**커밋**: `cf14ec0`
- `parenting.html` 신규 생성 (필수용품·도서·음악·미술·운동·여행 상세 가이드)
- 음악 섹션에 YouTube 바로가기 버튼 추가
- 기부 섹션 추가 (국경없는의사회 / 그린피스 / 유니세프)
- 초등·중등 "준비중" 탭 추가

---

## v2 — 2026-03-11
**커밋**: `95d4d63`
- 전체 디자인 다크 게임 스타일로 재설계
- 별 배경 캔버스 애니메이션 추가
- 앱 카드 호버 글로우 효과
- 아마존 추천 상품 4개

---

## v1 — 2026-03-11 (최초)
**커밋**: `d59afe6`
- 밝은 테마 첫 버전
- 앱 3개 (내사랑, 행복한 하루, 수학왕국)
- 아마존 추천 상품 4개
- 블로그 글 3개

---

## 파일 구조
```
hub_site/
├── index.html       # 메인 허브 페이지
├── parenting.html   # 육아 완전 가이드
└── CHANGELOG.md     # 이 파일
```

## 앱 URL 목록
- 내사랑: https://choisuka.github.io/naesarang/
- 행복한 하루: https://choisuka.github.io/Happy-day/
- 수학왕국: https://choisuka.github.io/math-games-kingdom/
- 수학탐정수사국: https://choisuka.github.io/detective_math/detective_game.html

## 수정 예정 (TODO)
- [ ] 아마존 태그 ID 교체 (현재 YOUR-TAG-HERE)
- [ ] 실제 상품 이미지 URL 추가
- [ ] 초등·중등 콘텐츠 추가
- [ ] 기부 내역 업데이트 섹션
