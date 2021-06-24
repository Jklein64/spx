import {useRouter} from 'next/router'

const auto = () => {
    const {query} = useRouter()
    const {auto: url} = query

    if (!url)
        return <div />

    console.log('[info] redirecting user to url:', url)
    window.location = url

    // hack to close the current window.  Won't work on all browsers, but works for chrome as of 6/24/2021
    window.setTimeout(() => {
        window.open('', '_parent', '').close();
    }, 10000)

    return null
}

export default auto
