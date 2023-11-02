export const formatCurrency = amount => Number(amount).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
})

export const formatString = (str) => {
    const strFinal = str.toUpperCase()
    const formatFinal = strFinal.replace(/-/g, ' ')
    return formatFinal
}