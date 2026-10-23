// 강점 버튼을 누르면 해당 근거만 보이게 한다. <button>이라 클릭·Enter·Space가 모두 동작한다.
(function () {
  var buttons = document.querySelectorAll('.pick button[aria-controls]');

  function select(target) {
    buttons.forEach(function (b) {
      var open = b === target;
      b.setAttribute('aria-expanded', String(open));
      document.getElementById(b.getAttribute('aria-controls')).hidden = !open;
    });
  }

  buttons.forEach(function (b) {
    b.addEventListener('click', function () { select(b); });
  });
})();
