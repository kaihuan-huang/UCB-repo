SELECT *
FROM course_names
JOIN department ON course_names.department = department.id;

SELECT *
FROM department
JOIN course_names ON department.id = course_names.department
ORDER BT course_names.id;
-- DESC/ASC 