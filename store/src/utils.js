export function formatCurrecy(amount,currecy){
    return new Intl.NumberFormat('en-In',{style:'currency',currency:currecy}).format(amount)
}