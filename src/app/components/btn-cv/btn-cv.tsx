'use client'

import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import { useTranslations } from 'next-intl';

export default function BtnCv() {
    const t = useTranslations('cv');

    const [cv, setCv] = useState("https://docs.google.com/document/d/1w_l_pzVRYEoheRNNxdXyvtjhw1iGBRY5aQD5TxqpJjY/edit?usp=sharing")

    useEffect(() => {
        if (typeof window !== 'undefined' && window.navigator.language !== 'pt-BR')
            setCv("https://docs.google.com/document/d/1EYh4xXVhThQsV3qhCQe33oR3QRj4jXeEgH8eg5k5mfQ/edit?usp=sharing")
    }, [])

    return (
        <div className={styles.container}>
            <Link className={styles.btn} href={cv} target='_blank'>{t('title')}</Link>
        </div>
    )
}
