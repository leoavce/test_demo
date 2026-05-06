const views = {
  member: {
    role: '구성원 View',
    title: '내 역할 기반 역량 인사이트',
    badge: '본인 정보만 조회',
    chatMode: '구성원용 인사이트',
    cards: [
      {
        title: '현재 역할 특징', metric: 'Backend Engineer · P2',
        text: '현재 역할은 API 설계, 서비스 운영 안정화, 협업 기반 개발 경험의 비중이 높게 나타납니다.',
        chips: ['API 설계', '운영 안정화', '장애 대응', '협업 개발'], progress: 78
      },
      {
        title: '강점 흐름', metric: '운영/안정화 경험 증가',
        text: '최근 역할 흐름상 서비스 안정성, 이슈 대응, 배포 이후 운영 관점의 경험이 꾸준히 축적되고 있습니다.',
        chips: ['서비스 안정성', '트러블슈팅', '운영 개선'], progress: 84
      },
      {
        title: '다음 역할 참고 포인트', metric: '구조 설계 경험 확대',
        text: '상위 역할군에서는 시스템 구조 설계, 기술 의사결정 참여, 리뷰 리딩 경험의 비중이 더 높게 나타납니다.',
        chips: ['아키텍처', '기술 리딩', '리뷰 참여'], progress: 56
      }
    ],
    prompts: [
      ['내 역할 특징 알려줘', '현재 역할은 운영 안정성과 협업 기반 개발 경험이 강하게 나타납니다. 동일 역할군 기준으로 API 설계와 장애 대응 경험은 안정적으로 확인되며, 다음 단계에서는 구조 설계와 기술 리뷰 참여 경험이 의미 있는 참고 포인트가 될 수 있습니다.'],
      ['내 강점 흐름 요약해줘', '최근 데이터 기준으로 운영 안정화, 장애 대응, API 설계 관련 경험 흐름이 증가하고 있습니다. 이는 현재 역할 수행에 필요한 핵심 역량과 잘 연결되는 패턴입니다.'],
      ['다음 단계에서 참고할 역량은?', '현재와 유사한 역할군의 다음 단계에서는 시스템 구조 설계, 기술 표준화, 리뷰 리딩 경험이 더 자주 나타납니다. 이는 평가가 아니라 성장 참고용 인사이트입니다.']
    ]
  },
  leader: {
    role: '직책자 View',
    title: '팀 역량 구조와 역할 적합성 탐색',
    badge: '팀 단위 인사이트',
    chatMode: '리더용 조직 운영 지원',
    cards: [
      {
        title: '팀 강점 영역', metric: '운영 안정화 중심',
        text: '팀 전체적으로 장애 대응, 유지보수, 운영 안정화 경험 비중이 높아 안정적인 서비스 운영에 강점이 있습니다.',
        chips: ['장애 대응', '유지보수', '운영 안정성'], progress: 86
      },
      {
        title: '역량 공백 후보', metric: '자동화/구조 설계 보완 필요',
        text: '자동화 기반 운영과 시스템 구조 설계 경험은 일부 인력에게 집중되어 있어 역할 분산 관점의 검토가 필요합니다.',
        chips: ['자동화', '구조 설계', '표준화'], progress: 48
      },
      {
        title: '역할 적합 인력 탐색', metric: '조건 기반 후보 요약',
        text: '프로젝트 요구 스킬을 입력하면 유사 역량 구조를 가진 인력을 요약하되, 최종 배치 판단은 직책자가 수행합니다.',
        chips: ['Skill Matching', '역할 적합성', '배치 참고'], progress: 72
      }
    ],
    prompts: [
      ['현재 팀에 부족한 역할 알려줘', '현재 팀은 운영 안정화와 장애 대응 역량은 강하지만, 자동화 기반 운영과 시스템 구조 설계 경험은 상대적으로 적게 나타납니다. 단기적으로는 자동화 경험 보유자의 업무 집중도를 확인하는 것이 좋습니다.'],
      ['API 설계 가능한 인력 찾아줘', 'API 설계, 운영 안정화, 장애 대응 경험을 함께 가진 인력군이 확인됩니다. 결과는 역할 적합성 참고용이며, 개인 상세 비교나 순위화는 제공하지 않습니다.'],
      ['팀 운영 리스크 요약해줘', '특정 인력에게 구조 설계와 장애 대응 경험이 집중되는 패턴이 보입니다. 백업 가능 인력 확보와 지식 공유 구조가 운영 리스크 완화에 도움이 될 수 있습니다.']
    ]
  },
  hr: {
    role: 'HR View',
    title: '직무역량 체계 운영 지원',
    badge: '조직 통계 중심',
    chatMode: 'HR 직무체계 관리 지원',
    cards: [
      {
        title: '역량 체계 정합성', metric: '중복 후보 12건',
        text: '문제 해결력, 이슈 대응, 트러블슈팅처럼 정의가 유사한 역량 항목을 묶어 체계 정비 후보로 제시합니다.',
        chips: ['중복 탐지', '유사 역량', '체계 정비'], progress: 64
      },
      {
        title: '조직별 역량 분포', metric: '직무/조직 단위 분석',
        text: '조직별로 집중된 역량과 부족한 역할군을 확인하여 인력 운영과 직무체계 개선의 근거로 활용합니다.',
        chips: ['역량 분포', '역할 편중', '조직 비교'], progress: 76
      },
      {
        title: '역할 정의 개선', metric: '활용 빈도 낮은 역량 탐지',
        text: 'ERP에 등록되어 있으나 실제 역할 데이터에서 거의 사용되지 않는 역량을 찾아 관리 효율을 높입니다.',
        chips: ['역량 활용도', '직무 정의', '운영 효율'], progress: 58
      }
    ],
    prompts: [
      ['유사 역량 후보 보여줘', '문제 해결력, 이슈 대응, 트러블슈팅 항목은 정의 유사도가 높게 나타납니다. 직무체계 정비 시 하나의 상위 역량과 하위 행동지표로 재구성할 수 있습니다.'],
      ['조직별 역량 특징 요약해줘', 'A본부는 운영 안정화와 장애 대응 역량이 높고, B본부는 신규 기술 적용과 구조 설계 경험 비중이 높습니다. 조직 간 역할 특성이 다르게 나타납니다.'],
      ['역량 체계 개선 포인트 알려줘', '활용 빈도가 낮은 역량 항목과 유사 정의 항목을 우선 점검하면, 직무역량 체계의 가독성과 운영 효율을 높일 수 있습니다.']
    ]
  },
  org: {
    role: '조직 효과 View',
    title: '구성원·리더·HR을 연결하는 기대효과',
    badge: '전사 AX 효과',
    chatMode: '조직 관점 요약',
    cards: [
      {
        title: '구성원 효과', metric: '자기 역할 이해 강화',
        text: '구성원은 자신의 역량 상태와 역할 특성을 쉽게 이해하고, 성장 방향을 참고할 수 있습니다.',
        chips: ['자기 이해', '역할 명확화', '성장 참고'], progress: 82
      },
      {
        title: '직책자 효과', metric: '인력 운영 판단 지원',
        text: '직책자는 팀 역량 구조, 역할 공백, 운영 리스크를 빠르게 파악해 배치와 협업 판단에 활용할 수 있습니다.',
        chips: ['팀 구조', '역할 공백', '운영 리스크'], progress: 88
      },
      {
        title: 'HR 효과', metric: '직무체계 운영 고도화',
        text: 'HR은 직무역량 체계를 데이터 기반으로 점검하고, 조직 단위 역량 분포를 운영 인사이트로 전환할 수 있습니다.',
        chips: ['직무체계', '역량 분포', 'AX'], progress: 80
      }
    ],
    prompts: [
      ['이 서비스의 핵심 가치는?', 'ERP에 저장된 직무·스킬셋 데이터를 구성원, 직책자, HR이 각자의 권한 안에서 이해 가능한 인사이트로 활용하게 만드는 것입니다.'],
      ['AI가 판단하는 시스템인가?', '아닙니다. 이 서비스는 사람을 평가하거나 배치 결정을 자동화하지 않습니다. 역할과 조직 상태를 설명하고, 최종 판단은 사람이 하도록 지원합니다.'],
      ['전사 기대효과 요약해줘', '구성원은 자기 역할 이해, 직책자는 팀 운영 판단, HR은 직무체계 관리, 조직은 인력 배치 효율과 협업 생산성 향상을 기대할 수 있습니다.']
    ]
  }
};

const navItems = document.querySelectorAll('.nav-item');
const cardsEl = document.getElementById('cards');
const promptsEl = document.getElementById('prompts');
const chatWindow = document.getElementById('chatWindow');

function renderView(key) {
  const view = views[key];
  document.getElementById('viewRole').textContent = view.role;
  document.getElementById('viewTitle').textContent = view.title;
  document.getElementById('viewBadge').textContent = view.badge;
  document.getElementById('chatMode').textContent = view.chatMode;

  cardsEl.innerHTML = view.cards.map(card => `
    <article class="card">
      <div class="card-top">
        <h3>${card.title}</h3>
        <span class="metric">${card.metric}</span>
      </div>
      <p>${card.text}</p>
      <div class="chips">${card.chips.map(chip => `<span class="chip">${chip}</span>`).join('')}</div>
      <div class="progress"><span style="width:${card.progress}%"></span></div>
    </article>
  `).join('');

  promptsEl.innerHTML = view.prompts.map((prompt, index) => `
    <button class="prompt-btn" data-index="${index}">${prompt[0]}</button>
  `).join('');

  chatWindow.innerHTML = `
    <div class="message bot">
      <div class="bubble">안녕하세요. 현재 <strong>${view.role}</strong>입니다. 아래 예시 질문을 선택하면 데모 응답을 확인할 수 있습니다.</div>
    </div>
  `;

  document.querySelectorAll('.prompt-btn').forEach(button => {
    button.addEventListener('click', () => {
      const [question, answer] = view.prompts[button.dataset.index];
      addMessage(question, 'user');
      setTimeout(() => addMessage(answer, 'bot'), 250);
    });
  });
}

function addMessage(text, type) {
  const div = document.createElement('div');
  div.className = `message ${type}`;
  div.innerHTML = `<div class="bubble">${text}</div>`;
  chatWindow.appendChild(div);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(nav => nav.classList.remove('active'));
    item.classList.add('active');
    renderView(item.dataset.view);
  });
});

renderView('member');
