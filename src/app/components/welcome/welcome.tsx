import React from 'react'
import styles from './styles.module.scss'
import computer from '../../../images/home/computer.png'
import { useTranslations } from 'next-intl';

export default function Welcome() {
  const t = useTranslations('welcome');

  return (
    <section className={styles.container}>
      <div className={styles.presentation}>
        <h1>{t('title')}</h1>
        <p>{t('description')}</p>
        <span><div className={styles.dot} /> {t('location')}</span>
      </div>
      <div className={styles.imageArea}>
        <img draggable={false} src={computer.src} alt='computer' />
      </div>
    </section>
  )
}
