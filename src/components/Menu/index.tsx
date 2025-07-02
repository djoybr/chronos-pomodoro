import {
  HistoryIcon,
  SettingsIcon,
  SunIcon,
  HouseIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { useState } from 'react';

export function Menu() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  return (
    <nav className={styles.menu}>
      <a className={styles.menuLink} href='#' aria-label='Ir para a Home' title='Ir para a Home'>
        <HouseIcon />
      </a>

      <a className={styles.menuLink} href='#' aria-label='Ver Histórico' title='Ver Histórico'>
        <HistoryIcon />
      </a>

      <a className={styles.menuLink} href='#' aria-label='Configurações' title='Configurações'>
        <SettingsIcon />
      </a>

      <a className={styles.menuLink} href='#' aria-label='Mudar Tema' title='Mudar Tema'>
        <SunIcon />
      </a>
    </nav>
  );
}
