window.addEventListener('devicemotion', function(event) {
    const x = event.accelerationIncludingGravity.x;
    const y = event.accelerationIncludingGravity.y;
    const z = event.accelerationIncludingGravity.z;

    const resultAcc = document.getElementById('result_acc')
    resultAcc.innerHTML = '重力加速度<br />' +
        'X: ' + x.toFixed(2) + '(m/s^2)<br />' +
        'Y: ' + y.toFixed(2) + '(m/s^2)<br />' +
        'Z: ' + z.toFixed(2) + '(m/s^2)<br />'
}, false)

window.addEventListener('deviceorientation', function (event) {
    const alpha = event.alpha;
    const beta = event.beta;
    const gamma = event.gamma;

    const resultGyro = document.getElementById('result_gyro')
    resultGyro.innerHTML = 'ジャイロセンサ<br />' +
        'alpha: ' + alpha.toFixed(2) + '°<br />' +
        'beta: ' + beta.toFixed(2) + '°<br />' +
        'gamma: ' + gamma.toFixed(2) + '°<br />'
}, false)