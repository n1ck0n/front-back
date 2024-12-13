document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
  
      const targetId = this.getAttribute('href')
      const targetElement = document.querySelector(targetId)
  
      // Получаем высоту фиксированного элемента (если есть)
      const headerOffset = 100 //
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY
  
      // Вычисляем позицию с учетом смещения
      const offsetPosition = elementPosition - headerOffset
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    })
  })
  