'use strict';
// Status	Error message (backend)	Kiedy występuje	Frontend
// 400	Please provide password and email!	Login bez emaila lub hasła	"Podaj email i hasło."
// 401	Incorrect email or password!	Zły email albo hasło	"Nieprawidłowy email lub hasło."
// 401	You are not logged in! Please log in to get access.	Brak JWT/cookie przy chronionej trasie	"Musisz być zalogowany."
// 401	The user belonging to this token does no longer exists.	Token istnieje, ale użytkownik został usunięty	"Sesja wygasła. Zaloguj się ponownie."
// 401	User recently changed password! Please log in again.	Hasło zmienione po wydaniu tokena	"Hasło zostało zmienione. Zaloguj się ponownie."
// 403	You do not have permission to perform this action.	Użytkownik nie ma odpowiednich uprawnień	"Nie masz uprawnień do tej operacji."
// 400	Please provide your email address.	Forgot password bez emaila	"Podaj adres email."
// 404	There is no user with this email address.	Email nie istnieje w bazie	"Nie znaleziono konta z tym adresem."
// 500	There was an error sending the email. Try again later!	Problem z wysłaniem maila resetującego	"Nie udało się wysłać wiadomości. Spróbuj później."
// 400	Token is invalid or has expired.	Zły albo wygasły token resetowania hasła	"Link resetowania hasła wygasł."
// 401	Your current password is wrong	Aktualne hasło przy zmianie hasła jest złe	"Aktualne hasło jest nieprawidłowe."
