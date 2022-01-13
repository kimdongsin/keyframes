// 성공시  이 부분을 호출
Swal.fire({
  icon: 'success',
  title: 'Success',
  text: '성공적으로 전송되었습니다.메일을 확인해주세요.',
  footer: '<a href="">로그인페이지로 가기</a>'
});




// 실패시 이 부분을 호출
Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: '메일전송이 실패되었습니다. 다시 확인해주세요.',
    // footer: '<a href="">메일전송이 실패되었습니다.다시 확인해주세요</a>'
  });