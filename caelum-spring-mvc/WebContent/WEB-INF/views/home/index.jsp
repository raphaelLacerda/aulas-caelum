<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	spring mvc

	<form:form method="post" action="arquivo" enctype="multipart/form-data">

			selecione seu arquivo <input type="file" name="summary">
		<br />

		<input type="submit" value="Enviar">
	</form:form>


</body>
</html>