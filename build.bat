@echo off

echo Compiling...
CALL npm run compile

REM echo Cleaning Build Folder...
REM DEL ".\build\*.js" > NUL
REM DEL ".\build\*.js.map" > NUL
REM DEL ".\build\engine\*.js" > NUL
REM DEL ".\build\engine\*.js.map" > NUL
REM DEL ".\build\game\*.js" > NUL
REM DEL ".\build\game\*.js.map" > NUL
REM 
REM echo Compiling...
REM CALL tsc
CALL COPY ".\src\game\index.html" ".\dist\index.html" > NUL

echo Compilation complete

pause