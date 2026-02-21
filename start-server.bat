@echo off
echo Starting local server...
echo Open http://localhost:8080 in your browser
echo Press Ctrl+C to stop
echo.
npx -y serve -p 8080 .
pause
