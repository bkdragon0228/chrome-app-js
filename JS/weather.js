function onGeoOk(position) {
  // 객체를 유일한 매개변수로 받는 콜백 함수
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log(`you live in ${lat}, ${lng}`);
}
function onGeoError() {
  // error 났을 때 함수
  alert("Can't find you. No  weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
