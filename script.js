document.addEventListener("DOMContentLoaded", function() {
    // 지정된 숫자들 (1, 2, 3, 4만 사용)
    const numbers = [1, 2, 3, 4];
    const digits = document.querySelectorAll('.digit');
    
    let currentNumbers = [1, 1, 1, 1];  // 처음 숫자는 1로 시작
  
    // 슬롯머신 효과
    function startRolling() {
      setInterval(() => {
        // 각 자리 숫자를 순차적으로 1부터 4까지 변경
        currentNumbers = currentNumbers.map((num) => {
          let nextNum = (num % 4) + 1;  // 1부터 4까지만 숫자가 증가
          return nextNum;
        });
  
        digits.forEach((digit, index) => {
          const newNumber = currentNumbers[index];
  
          // 새로운 숫자를 표시할 span 요소 생성
          let newSpan = document.createElement("span");
          newSpan.textContent = newNumber;
          
          // 새로운 span을 아래로 추가하여 미끄러지는 효과를 주기
          newSpan.style.transform = "translateY(100%)";
          digit.appendChild(newSpan);
  
          // 숫자가 미끄러지듯이 올라가도록 애니메이션을 설정
          setTimeout(() => {
            newSpan.style.transition = "transform 0.3s ease-in-out";
            newSpan.style.transform = "translateY(0)";
          }, 0);
  
          // 애니메이션이 끝난 후, 이전 숫자를 제거
          setTimeout(() => {
            if (digit.children.length > 1) {
              digit.removeChild(digit.firstChild);  // 가장 첫 번째 자식(span)을 삭제
            }
          }, 300); // 애니메이션 시간과 맞춰서 이전 숫자를 삭제
        });
  
      }, 1000); // 1초마다 숫자 변경
    }
  
    startRolling();
  });
  
  