import ProfilePicture from '../../../assets/perfil.png';
import CardTreino from '../../../components/CardTreino'
import styles from './Perfil.module.css';
import { Link } from 'react-router-dom';

export default function Perfil() {
  return (
    <div>
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.perfil}>
            <header className={styles.perfilInfo}>

              <div>
                <h1>Perfil do Aluno</h1>
                <Link to='/'>Home</Link>
              </div>

              <nav className={styles.perfilMenu}>
                <ul>
                  <li>
                    <Link>Fulano de Tal</Link>
                  </li>
                  <li>
                    <Link>27 anos</Link>
                  </li>
                  <li>
                    <Link to="/historico">Historico de treino</Link>
                  </li>
                  <li>
                    <Link>(61) 9999-9999</Link>
                  </li>
                </ul>
              </nav>

              <div className={styles.perfilFoto}>
                <img src={ProfilePicture} alt="foto do aluno" />
              </div>
            </header>

            <main className={styles.treinamentos}>
              <div className={styles.treinoLista}>
                <CardTreino dia="Segunda" grupoMuscular="Peito" />
                <CardTreino dia="Terça" grupoMuscular="Pernas" />
                <CardTreino dia="Quarta" grupoMuscular="Costas" />
                <CardTreino dia="Quinta" grupoMuscular="Bicípes" />
                <CardTreino dia="Sexta" grupoMuscular="Ombro" />
                <CardTreino dia="Sábado" grupoMuscular="Tricípes" />
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
