#!/bin/sh

trap 'my_exit; exit' SIGINT SIGQUIT

my_exit()
{
  echo "you hit Ctrl-C/Ctrl-\, now exiting.."
  #fuser tcp 3000
  #fuser tcp 3001
}

echo 'start server...'
node serverReq.js & node serverRes.js 
