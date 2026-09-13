document.addEventListener(
  "DOMContentLoaded",
  function () {

    /* ================================== */
    /* DOM */
    /* ================================== */

    const ktxStartBtn =
      document.getElementById("ktxStartBtn");

    const mugunghwaStartBtn =
      document.getElementById("mugunghwaStartBtn");

    const ktxTrain =
      document.getElementById("ktxTrain");

    const mugunghwaTrain =
      document.getElementById("mugunghwaTrain");

    const signalIcon =
      document.getElementById("signalIcon");

    const signalText =
      document.getElementById("signalText");

    const sceneMessage =
      document.getElementById("sceneMessage");

    const impact =
      document.getElementById("impact");

    const ktxFaults =
      document.getElementById("ktxFaults");

    const mugunghwaFaults =
      document.getElementById("mugunghwaFaults");

    const repairStartBtn =
      document.getElementById("repairStartBtn");

    const scoreEl =
      document.getElementById("score");

    const streakEl =
      document.getElementById("streak");

    const missionType =
      document.getElementById("missionType");

    const phaseBadge =
      document.getElementById("phaseBadge");

    const missionIcon =
      document.getElementById("missionIcon");

    const missionTitle =
      document.getElementById("missionTitle");

    const missionText =
      document.getElementById("missionText");

    const characterArea =
      document.getElementById("characterArea");

    const choiceArea =
      document.getElementById("choiceArea");

    const feedback =
      document.getElementById("feedback");

    const speechBox =
      document.getElementById("speechBox");

    const speechText =
      document.getElementById("speechText");

    const speechDoneBtn =
      document.getElementById("speechDoneBtn");

    const nextBtn =
      document.getElementById("nextBtn");

    const soundBtn =
      document.getElementById("soundBtn");

    const successModal =
      document.getElementById("successModal");

    const restartBtn =
      document.getElementById("restartBtn");

    const ktxProgress =
      document.getElementById("ktxProgress");

    const mugunghwaProgress =
      document.getElementById("mugunghwaProgress");

    const ktxPercent =
      document.getElementById("ktxPercent");

    const mugunghwaPercent =
      document.getElementById("mugunghwaPercent");


    /* ================================== */
    /* 상태 */
    /* ================================== */

    let ktxStarted = false;

    let mugunghwaStarted = false;

    let crashed = false;

    let repairStarted = false;

    let score = 0;

    let streak = 0;

    let missionIndex = 0;

    let currentMission = null;

    let ktxRepair = 0;

    let mugunghwaRepair = 0;


    /* ================================== */
    /* 미션 */
    /* ================================== */

    const missions = [

      {
        phase: "1단계",
        type: "상황 판단",
        icon: "🚨",

        title:
          "사고 직후 가장 먼저",

        text:
          "두 열차가 멈췄어요. 가장 먼저 무엇을 해야 할까요?",

        choices: [
          "🚦 다른 열차가 들어오지 못하게 한다",
          "📷 사진을 찍는다",
          "🏁 어느 열차가 더 빠른지 본다",
          "▶ 바로 다시 출발한다"
        ],

        answer: 0,

        feedback:
          "맞아요! 먼저 주변 열차의 접근을 막고 안전을 확보해야 해요.",

        speech:
          "모든 열차는 현재 위치에서 정지해 주세요. 안전을 확인하겠습니다.",

        team: "inspect",

        ktx: 10,
        mugunghwa: 10
      },


      {
        phase: "2단계",
        type: "작업 지시",
        icon: "🛞",

        title:
          "무궁화호 바퀴",

        text:
          "무궁화호 오른쪽 바퀴를 정비해야 해요. 어떻게 말하면 좋을까요?",

        choices: [
          "🔧 빨리 고쳐요",
          "🛞 무궁화호 오른쪽 바퀴를 확인해 주세요",
          "👀 기차 좀 보세요",
          "🤷 아무거나 먼저 해주세요"
        ],

        answer: 1,

        feedback:
          "좋아요! 어느 열차의 어느 부분인지 정확히 말했어요.",

        speech:
          "바퀴 정비팀, 무궁화호 오른쪽 바퀴를 확인해 주세요.",

        team: "wheel",

        fix: "wheel",

        ktx: 0,
        mugunghwa: 25
      },


      {
        phase: "3단계",
        type: "작업 지시",
        icon: "🚪",

        title:
          "KTX 출입문",

        text:
          "KTX-산천의 출입문을 수리해야 해요. 가장 좋은 지시는 무엇일까요?",

        choices: [
          "🚪 문 고쳐주세요",
          "🚄 KTX-산천 2호차 출입문을 확인해 주세요",
          "👆 저기 좀 봐주세요",
          "🚆 무궁화호부터 보세요"
        ],

        answer: 1,

        feedback:
          "맞아요! 열차와 위치를 정확하게 알려줬어요.",

        speech:
          "출입문 정비팀, KTX-산천 2호차 출입문을 확인해 주세요.",

        team: "door",

        fix: "door",

        ktx: 25,
        mugunghwa: 0
      },


      {
        phase: "4단계",
        type: "대화 기술",
        icon: "📡",

        title:
          "무전이 잘 안 들렸어요",

        text:
          "정비팀의 마지막 말을 잘 듣지 못했어요. 어떻게 해야 할까요?",

        choices: [
          "🤔 알아들은 척한다",
          "📡 다시 말해 달라고 한다",
          "🔧 내 생각대로 작업한다",
          "😠 화를 낸다"
        ],

        answer: 1,

        feedback:
          "맞아요! 잘 못 들었으면 다시 확인하는 것이 중요해요.",

        speech:
          "죄송합니다. 마지막 내용을 다시 한 번 말씀해 주세요.",

        team: "radio",

        ktx: 10,
        mugunghwa: 10
      },


      {
        phase: "5단계",
        type: "작업 지시",
        icon: "⚡",

        title:
          "KTX 전기 점검",

        text:
          "KTX-산천의 전기 계통도 확인해야 해요.",

        choices: [
          "⚡ 전기팀 알아서 하세요",
          "⚡ KTX-산천 전원 계통을 점검해 주세요",
          "💡 한번 켜보세요",
          "🚆 무궁화호만 고쳐요"
        ],

        answer: 1,

        feedback:
          "정답! 담당 팀과 작업 대상을 정확하게 말했어요.",

        speech:
          "전기 정비팀, KTX-산천 전원 계통을 점검해 주세요.",

        team: "electric",

        fix: "electric",

        ktx: 25,
        mugunghwa: 0
      },


      {
        phase: "6단계",
        type: "작업 지시",
        icon: "🛤️",

        title:
          "선로 점검",

        text:
          "무궁화호 아래쪽 선로도 점검해야 해요.",

        choices: [
          "🛤️ 무궁화호 아래쪽 선로를 점검해 주세요",
          "👷 저쪽을 보세요",
          "🚄 KTX만 확인하세요",
          "🏃 빨리 하세요"
        ],

        answer: 0,

        feedback:
          "좋아요! 어느 선로를 확인해야 하는지 정확하게 말했어요.",

        speech:
          "선로 정비팀, 무궁화호 아래쪽 선로를 점검해 주세요.",

        team: "track",

        fix: "track",

        ktx: 0,
        mugunghwa: 25
      },


      {
        phase: "7단계",
        type: "상황 변화",
        icon: "🌧️",

        title:
          "비가 오기 시작했어요",

        text:
          "수리 도중 비가 많이 오기 시작했어요. 어떻게 말하면 좋을까요?",

        choices: [
          "🏃 빨리 끝내세요",
          "🌧️ 미끄러운 곳을 조심하고 안전을 먼저 확인해 주세요",
          "🔧 그냥 계속하세요",
          "😠 왜 이렇게 느려요"
        ],

        answer: 1,

        feedback:
          "맞아요! 새로운 위험이 생겼다면 안전을 다시 알려줘야 해요.",

        speech:
          "비가 많이 옵니다. 미끄러운 곳을 조심하고 안전을 먼저 확인해 주세요.",

        team: "track",

        ktx: 10,
        mugunghwa: 10
      },


      {
        phase: "8단계",
        type: "다시 설명하기",
        icon: "🗣️",

        title:
          "정비사가 못 알아들었어요",

        text:
          "정비사가 어느 출입문인지 잘 모르겠다고 해요.",

        choices: [
          "😠 아까 말했잖아요",
          "🚪 KTX-산천 2호차 오른쪽 출입문입니다",
          "👀 알아서 찾으세요",
          "🤷 그냥 하지 마세요"
        ],

        answer: 1,

        feedback:
          "좋아요! 상대가 이해하지 못하면 더 구체적으로 다시 설명하면 돼요.",

        speech:
          "KTX-산천 2호차 오른쪽 출입문을 확인해 주세요.",

        team: "door",

        ktx: 10,
        mugunghwa: 0
      },


      {
        phase: "9단계",
        type: "최종 보고",
        icon: "📋",

        title:
          "수리 상태를 보고해요",

        text:
          "정비 책임자가 현재 상황을 물었어요.",

        choices: [
          "👍 거의 다 됐어요",
          "📋 KTX는 출입문과 전기, 무궁화호는 바퀴와 선로 점검이 완료됐습니다",
          "🤷 아마 끝났어요",
          "🔧 알아서 하고 있습니다"
        ],

        answer: 1,

        feedback:
          "좋아요! 어떤 작업이 완료됐는지 정확하게 보고했어요.",

        speech:
          "KTX-산천은 출입문과 전기, 무궁화호는 바퀴와 선로 점검이 완료됐습니다.",

        team: "inspect",

        ktx: 10,
        mugunghwa: 20,

        final: true
      }

    ];


    /* ================================== */
    /* KTX 출발 */
    /* ================================== */

    function startKtx() {

      if (
        ktxStarted ||
        crashed
      ) {
        return;
      }


      ktxStarted = true;


      ktxTrain.classList.add(
        "moving"
      );


      ktxStartBtn.classList.add(
        "running"
      );


      ktxStartBtn.disabled =
        true;


      ktxStartBtn.textContent =
        "🚄 운행 중";


      signalIcon.textContent =
        "🟢";


      signalText.textContent =
        "KTX 출발";


      sceneMessage.textContent =
        "🚄 KTX-산천이 출발했어요!";


      checkCollision();

    }


    /* ================================== */
    /* 무궁화 출발 */
    /* ================================== */

    function startMugunghwa() {

      if (
        mugunghwaStarted ||
        crashed
      ) {
        return;
      }


      mugunghwaStarted = true;


      mugunghwaTrain.classList.add(
        "moving"
      );


      mugunghwaStartBtn.classList.add(
        "running"
      );


      mugunghwaStartBtn.disabled =
        true;


      mugunghwaStartBtn.textContent =
        "🚆 운행 중";


      signalIcon.textContent =
        "🟢";


      signalText.textContent =
        "무궁화 출발";


      sceneMessage.textContent =
        "🚆 무궁화호가 출발했어요!";


      checkCollision();

    }


    /* ================================== */
    /* 두 기차 출발 확인 */
    /* ================================== */

    function checkCollision() {

      if (
        !ktxStarted ||
        !mugunghwaStarted ||
        crashed
      ) {
        return;
      }


      signalIcon.textContent =
        "🟡";


      signalText.textContent =
        "접근 중";


      sceneMessage.textContent =
        "⚠️ 두 열차가 같은 구간으로 접근하고 있어요!";


      setTimeout(
        causeCollision,
        1100
      );

    }


    /* ================================== */
    /* 충돌 */
    /* ================================== */

    function causeCollision() {

      if (crashed) {
        return;
      }


      crashed = true;


      ktxTrain.classList.remove(
        "moving"
      );


      mugunghwaTrain.classList.remove(
        "moving"
      );


      ktxTrain.classList.add(
        "crashed"
      );


      mugunghwaTrain.classList.add(
        "crashed"
      );


      impact.classList.remove(
        "hidden"
      );


      ktxFaults.classList.remove(
        "hidden"
      );


      mugunghwaFaults.classList.remove(
        "hidden"
      );


      signalIcon.textContent =
        "🔴";


      signalText.textContent =
        "정지";


      sceneMessage.textContent =
        "💥 쿵! 두 열차가 멈췄어요!";


      missionType.textContent =
        "사고 발생";


      phaseBadge.textContent =
        "긴급";


      missionIcon.textContent =
        "🚨";


      missionTitle.textContent =
        "복구 준비!";


      missionText.textContent =
        "복구 시작 버튼을 눌러 정비팀에게 명령해 보세요!";


      repairStartBtn.disabled =
        false;


      repairStartBtn.classList.remove(
        "locked"
      );


      repairStartBtn.classList.add(
        "ready"
      );


      repairStartBtn.textContent =
        "🚨 복구 시작";

    }


    /* ================================== */
    /* 복구 시작 */
    /* ================================== */

    function startRepair() {

      if (
        !crashed ||
        repairStarted
      ) {
        return;
      }


      repairStarted = true;


      repairStartBtn.classList.add(
        "hidden"
      );


      missionIndex = 0;


      score = 0;


      streak = 0;


      ktxRepair = 0;


      mugunghwaRepair = 0;


      updateScore();

      updateProgress();

      showMission();

    }


    /* ================================== */
    /* 미션 표시 */
    /* ================================== */

    function showMission() {

      currentMission =
        missions[
          missionIndex
        ];


      missionType.textContent =
        currentMission.type;


      phaseBadge.textContent =
        currentMission.phase;


      missionIcon.textContent =
        currentMission.icon;


      missionTitle.textContent =
        currentMission.title;


      missionText.textContent =
        currentMission.text;


      characterArea.textContent =
        "👦 아준 관제사";


      choiceArea.innerHTML =
        "";


      feedback.className =
        "feedback hidden";


      speechBox.classList.add(
        "hidden"
      );


      nextBtn.classList.add(
        "hidden"
      );


      clearTeams();


      currentMission
        .choices
        .forEach(
          function(
            choice,
            index
          ) {

            const btn =
              document.createElement(
                "button"
              );


            btn.className =
              "choice-btn";


            btn.type =
              "button";


            btn.textContent =
              choice;


            btn.addEventListener(
              "click",
              function() {

                answerMission(
                  index,
                  btn
                );

              }
            );


            choiceArea.appendChild(
              btn
            );

          }
        );

    }


    /* ================================== */
    /* 답 체크 */
    /* ================================== */

    function answerMission(
      index,
      btn
    ) {

      if (
        index ===
        currentMission.answer
      ) {

        btn.classList.add(
          "correct"
        );


        const allButtons =
          choiceArea.querySelectorAll(
            ".choice-btn"
          );


        allButtons.forEach(
          function(button) {

            button.disabled =
              true;

          }
        );


        score++;

        streak++;


        updateScore();


        feedback.textContent =
          currentMission.feedback;


        feedback.className =
          "feedback good";


        ktxRepair =
          Math.min(
            100,
            ktxRepair +
            currentMission.ktx
          );


        mugunghwaRepair =
          Math.min(
            100,
            mugunghwaRepair +
            currentMission.mugunghwa
          );


        updateProgress();


        highlightTeam(
          currentMission.team
        );


        if (
          currentMission.fix
        ) {

          repairFault(
            currentMission.fix
          );

        }


        speechText.textContent =
          "“" +
          currentMission.speech +
          "”";


        speechBox.classList.remove(
          "hidden"
        );

      }

      else {

        btn.classList.add(
          "wrong"
        );


        btn.disabled =
          true;


        streak = 0;


        updateScore();


        feedback.textContent =
          "🤔 다시 한번 생각해 볼까요?";


        feedback.className =
          "feedback bad";

      }

    }


    /* ================================== */
    /* 말하기 완료 */
    /* ================================== */

    function speechComplete() {

      speechBox.classList.add(
        "hidden"
      );


      if (
        currentMission.final
      ) {

        finishGame();

        return;

      }


      nextBtn.classList.remove(
        "hidden"
      );

    }


    /* ================================== */
    /* 다음 */
    /* ================================== */

    function nextMission() {

      missionIndex++;


      if (
        missionIndex >=
        missions.length
      ) {

        finishGame();

        return;

      }


      showMission();

    }


    /* ================================== */
    /* 진행도 */
    /* ================================== */

    function updateProgress() {

      ktxProgress.style.width =
        ktxRepair + "%";


      mugunghwaProgress.style.width =
        mugunghwaRepair + "%";


      ktxPercent.textContent =
        ktxRepair + "%";


      mugunghwaPercent.textContent =
        mugunghwaRepair + "%";

    }


    /* ================================== */
    /* 점수 */
    /* ================================== */

    function updateScore() {

      scoreEl.textContent =
        score;


      streakEl.textContent =
        streak;

    }


    /* ================================== */
    /* 팀 */
    /* ================================== */

    function clearTeams() {

      document
        .querySelectorAll(
          ".team-card"
        )
        .forEach(
          function(card) {

            card.classList.remove(
              "active"
            );

          }
        );

    }


    function highlightTeam(
      name
    ) {

      clearTeams();


      const card =
        document.querySelector(
          '[data-team="' +
          name +
          '"]'
        );


      if (card) {

        card.classList.add(
          "active"
        );

      }

    }


    /* ================================== */
    /* 고장 수리 */
    /* ================================== */

    function repairFault(
      type
    ) {

      let el = null;


      if (
        type === "wheel"
      ) {

        el =
          document.getElementById(
            "faultWheel"
          );

        el.textContent =
          "🛞✅";

      }


      if (
        type === "track"
      ) {

        el =
          document.getElementById(
            "faultTrack"
          );

        el.textContent =
          "🛤️✅";

      }


      if (
        type === "door"
      ) {

        el =
          document.getElementById(
            "faultDoor"
          );

        el.textContent =
          "🚪✅";

      }


      if (
        type === "electric"
      ) {

        el =
          document.getElementById(
            "faultElectric"
          );

        el.textContent =
          "⚡✅";

      }


      if (el) {

        el.classList.add(
          "fixed"
        );

      }

    }


    /* ================================== */
    /* 읽어주기 */
    /* ================================== */

    function readMission() {

      if (
        !currentMission ||
        !window.speechSynthesis
      ) {
        return;
      }


      window
        .speechSynthesis
        .cancel();


      const voice =
        new SpeechSynthesisUtterance(
          currentMission.title +
          ". " +
          currentMission.text
        );


      voice.lang =
        "ko-KR";


      voice.rate =
        0.9;


      window
        .speechSynthesis
        .speak(
          voice
        );

    }


    /* ================================== */
    /* 완료 */
    /* ================================== */

    function finishGame() {

      ktxRepair =
        100;


      mugunghwaRepair =
        100;


      updateProgress();


      impact.classList.add(
        "hidden"
      );


      ktxTrain.classList.remove(
        "crashed"
      );


      mugunghwaTrain.classList.remove(
        "crashed"
      );


      ktxTrain.classList.add(
        "repaired"
      );


      mugunghwaTrain.classList.add(
        "repaired"
      );


      signalIcon.textContent =
        "🟢";


      signalText.textContent =
        "운행 가능";


      sceneMessage.textContent =
        "✅ 수리 완료! 두 열차가 다시 운행할 수 있어요.";


      setTimeout(
        function() {

          successModal.classList.remove(
            "hidden"
          );

        },
        650
      );

    }


    /* ================================== */
    /* 다시 시작 */
    /* ================================== */

    function restartGame() {

      window.location.reload();

    }


    /* ================================== */
    /* 이벤트 연결 */
    /* ================================== */

    ktxStartBtn.addEventListener(
      "click",
      startKtx
    );


    mugunghwaStartBtn.addEventListener(
      "click",
      startMugunghwa
    );


    repairStartBtn.addEventListener(
      "click",
      startRepair
    );


    speechDoneBtn.addEventListener(
      "click",
      speechComplete
    );


    nextBtn.addEventListener(
      "click",
      nextMission
    );


    soundBtn.addEventListener(
      "click",
      readMission
    );


    restartBtn.addEventListener(
      "click",
      restartGame
    );


    /* 처음 상태 */

    updateScore();

    updateProgress();

  }
);
