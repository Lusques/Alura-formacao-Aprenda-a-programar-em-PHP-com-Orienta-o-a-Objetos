<!-- $ while true; do NEW=$(stat -c %Y primeiro-programa.php); if [ "$NEW" != "$OLD" ]; then OLD=$NEW; php ./primeiro-programa.php; fi; sleep 1; done -->
<?php echo 'Hello World!'; ?>