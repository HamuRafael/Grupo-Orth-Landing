@echo off
rem Serve o site em http://localhost:8080 — necessário p/ o vídeo do YouTube
rem funcionar no teste local (aberto por file:// o YouTube dá erro 153,
rem porque o navegador não envia o cabeçalho Referer).
cd /d "%~dp0"
echo Servindo o site do Grupo Orth em http://localhost:8080
echo (feche esta janela para parar o servidor)
start "" "http://localhost:8080"
python -m http.server 8080 2>nul || py -m http.server 8080
