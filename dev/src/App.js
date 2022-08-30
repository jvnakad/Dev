import react, {Component} from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      message: 'Insira seus dados para acessar o sistema.'
    };

    this.listeningEmail = this.listeningEmail.bind(this);
    this.listeningPass = this.listeningPass.bind(this);
    this.checkUser = this.checkUser.bind(this);
  }

  listeningEmail(event) {
    let state = this.state;
    state.email = event.target.value;
    this.setState(state);
    console.log(state.email);
  }

  listeningPass(event) {
    let state = this.state;
    state.senha = event.target.value;
    this.setState(state);
    console.log(state.senha);
  }

  checkUser() {
    if (this.state.email === 'joaovitor@gmail.com' && this.state.senha === '1234567') {
      this.setState({message: 'Acessado com sucesso!'});
    } else {
      this.setState({message: 'Usuário ou senha inválidos!'});
    }
  }
    
  
  render() {
    return (
      <div className='container-login'>
        <h2>Login</h2>
        <div className='form-login'>
          <input type='text' placeholder='E-mail' onChange={(e) => this.listeningEmail(e)} /><br />
          <input type='password' placeholder='Senha' onChange={(e) => this.listeningPass(e)}/><br />
          <button onClick={this.checkUser}>Entrar</button>
          <div className='mensagem'>{this.state.message}</div>
        </div>
      </div>
    );
  }
}

export default App;
