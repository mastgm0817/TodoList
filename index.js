
function addItem() 
{
  let list = document.getElementById('todoList');
  //ul 요소를 불러오기
  let todo = document.getElementById('item');
  // 입력값을 읽어오기
  let listitem = document.createElement('li');
  // 새로운 li요소를 생성
  let xbtn = document.createElement('button');
  // li요소에 들어갈 닫기 버튼 생성
  listitem.className = 'd-flex list-group-item list-group-item-action list-group-item-warning';
  // 부트스트랩에서 제공하는 d-flex
  xbtn.className = 'btn-close ms-auto';

  //delete 버튼에 대한 이벤트 처리
  xbtn.onclick = function(e){
    let pnode = e.target.parentNode;
    list.removeChild(pnode);

  }
  
  // li 요소 구성
  listitem.innerText = todo.value
  listitem.appendChild(xbtn);

  //ul 요소에 li 요소 추가
  list.appendChild(listitem);

  // 입력칸 비우기 및 포커스 이동
  todo.value = '';
  todo.focus();

}