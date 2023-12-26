import '../Subscription/Subscription.scss';

const Subscription = () => {
  const myStyles = {
    btnStyle: {
      color: '#ffff',
      backgroundColor: 'blue'
    },
    textStyle: {
      color: '#ffff',
      backgroundColor: 'green'
    }
  };

  return (
    <>
      <h3 className="subscription-info">YouTube Premium</h3>
      <p style={myStyles.textStyle}>YouTube Pro Subscription ends soons</p>
      <button style={myStyles.btnStyle}>Subscription</button>
    </>
  );
};

export default Subscription;
