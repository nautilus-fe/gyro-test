window.addEventListener('devicemotion', function(event) {
    var x = event.accelerationIncludingGravity.x;
    var y = event.accelerationIncludingGravity.y;
    var z = event.accelerationIncludingGravity.z;

    var resultAcc = document.getElementById('result_acc')
    resultAcc.innerHTML = '重力加速度<br />' +
        'X: ' + x + '(m/s^2)<br />' +
        'Y: ' + y + '(m/s^2)<br />' +
        'Z: ' + z + '(m/s^2)<br />'
}, true)

window.addEventListener('deviceorientation', function (event) {
    var alpha = event.alpha;
    var beta = event.beta;
    var gamma = event.gamma;

    var resultGyro = document.getElementById('result_gyro')
    resultGyro.innerHTML = 'ジャイロセンサ<br />' +
        'alpha: ' + alpha + '°<br />' +
        'beta: ' + beta + '°<br />' +
        'gamma: ' + gamma + '°<br />'
}, true)