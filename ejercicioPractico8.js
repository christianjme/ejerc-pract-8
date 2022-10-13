function tester(form){
  const $form = document.getElementById(form)
  let web

  addEventListener('submit', (e)=>{
    if(e.target === $form){
      e.preventDefault()

      web = window.open($form.url.value,'tester', `innerWidth=${$form.ancho.value},innerHeight=${$form.alto.value}`)
    }
  })

  addEventListener('click', (e)=>{
    if(e.target === $form.cerrar) web.close()
  })

}

tester('testerForm')

