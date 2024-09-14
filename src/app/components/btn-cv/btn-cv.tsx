'use client'

import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import { useTranslations } from 'next-intl';

export default function BtnCv() {
    const t = useTranslations('cv');

    const [cv, setCv] = useState("https://drive.google.com/file/d/1j-YOJB97wnIevgRDtMlZGlWYrsKEznXa/view?usp=sharing")

    useEffect(() => {
        if (typeof window !== 'undefined' && window.navigator.language !== 'pt-BR')
            setCv("https://drive.google.com/file/d/1R7yHYYRAl0zA_JzqeVLo7SgCjKFsIqpR/view?usp=sharing")
    }, [])

    return (
        <div className={styles.container}>
            <Link className={styles.btn} href={cv} target='_blank'>{t('title')}</Link>
        </div>
    )
}
