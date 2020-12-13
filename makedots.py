terms = ['News',
'Products',
'About',
'Contact',
'Cart',
'Code']

num = 50
increment = 10
s = ''
for term in terms:
  link = '<a  href="%s.html">' % term.lower()
  link += term
  link += '</a>'
  s += '<p>' + (num * '&middot; ') + link + '</p>\n'
  num += increment

print(s)


#Save change
#go to terminal
#arrow up
#enter
#cmd v in html in selected area