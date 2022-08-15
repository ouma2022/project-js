document.querySelectorAll('form input').forEach(function(field) {
	var fieldId = field.getAttribute('id');
  var requirements = '';
  
  switch(fieldId) {
    case 'email':
      requirements = 'Your email must have @'
      break;
    case 'password':
      requirements = 'Your password must have uppercase, lowercase, symbols and a length of 10';
      break;
  }
  
	field.addEventListener('focus', function() {
  	document.getElementById('requirements').innerText = requirements;
  })
  
  field.addEventListener('blur', function() {
  	document.getElementById('requirements').innerText = '';
  })
})

