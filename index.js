

const login=document.getElementById('login')
login.addEventListener('click',function(){
    const loginArea=document.getElementById('login-area')
    const tranArea=document.getElementById('transaction-area')
    loginArea.style.display='none'
    tranArea.style.display='block'

})




const addDeposit=document.getElementById('addDeposit')
addDeposit.addEventListener('click',function(){
    const depositAmount=document.getElementById('depositAmount')
    const currentWithdraw=document.getElementById('currentWithdraw')
    const currentBalance=document.getElementById('currentBalance')

    const totalcurrentDeposit=Number(depositAmount.value)+Number(currentDeposit.innerText)
    const totalcurrentBalance=Number(depositAmount.value)+Number(currentBalance.innerText)
    currentDeposit.innerText=totalcurrentDeposit
    currentBalance.innerText=totalcurrentBalance
})



const addWithdraw=document.getElementById('addWithdraw')
addWithdraw.addEventListener('click',function(){
    const withdrawAmount=document.getElementById('withdrawAmount')
    const currentWithdraw=document.getElementById('currentWithdraw')
    const currentBalance=document.getElementById('currentBalance')
   

    const totalcurrentWithdraw=Number(withdrawAmount.value)+Number(currentWithdraw.innerText)
    const totalcurrentBalance=Number(currentBalance.innerText)-Number(withdrawAmount.value)
    currentWithdraw.innerText=totalcurrentWithdraw
    currentBalance.innerText=totalcurrentBalance
  
})


