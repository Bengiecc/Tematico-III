-- este query selecciona una pregunta aleatoria de una categoría específica.
-- Aunque, ocasionalmente regresa sets vacíos...

SELECT * FROM trivia.questions AS Questions
INNER JOIN 
	trivia.qcategory AS Category
ON
	Questions.questionCategory=Category.categoryID
WHERE Category.categoryID='5' AND questionId=(SELECT FLOOR(RAND()*(5-1+1))+1)