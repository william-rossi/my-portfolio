import { getRequestConfig } from 'next-intl/server'
import { cookies } from 'next/headers'

export default getRequestConfig(async () => {
    const browserLang = cookies().get('language')?.value || ""

    const supportedLocales = ['pt-BR', 'en-US']
    let locale = 'en-US'

    if (supportedLocales.includes(browserLang))
        locale = browserLang

    return {
        locale,
        messages: (await import(`../resources/${locale}.json`)).default
    }
})