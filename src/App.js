import './App.css';

function App() {
  const menus = [
    {
      name: '아메리카노',
      price: 3000
    },
    {
      name: '카페라떼',
      price: 4000
    },
    {
      name: '초코라떼',
      price: 4500
    },
    {
      name: '딸기스무디',
      price: 5000
    }
  ];

  const orderMenu = (menuName) => {
    alert(`${menuName} 주문이 완료되었습니다!`);
  };

  return (
    <div className="container">
      <h1>☕ 카페 메뉴 주문 시스템</h1>

      <p>
        React와 AWS S3를 이용한 정적 웹사이트입니다.
      </p>

      <div className="menu-list">
        {menus.map((menu, index) => (
          <div className="menu-card" key={index}>
            <h2>{menu.name}</h2>

            <p>{menu.price.toLocaleString()}원</p>

            <button onClick={() => orderMenu(menu.name)}>
              주문하기
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;