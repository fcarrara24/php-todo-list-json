<?php

//leggo il file todolist.json e lo metto in una variabile come stringa
$filecontent = file_get_contents("todo-list.json");

// il true serve per trasformare in array
$list = json_decode($filecontent, true);


//adding tasks
if (isset($_POST['task'])) {
    $newtask = [
        "nome" => $_POST['task'],
        "done" => true
    ];
    array_push($list, $newtask);
    file_put_contents('todo-list.json', json_encode($list));

}

if (isset($_POST['deletetask'])) {
    $indexx = $_POST['deletetask'];
    array_splice($list, $index, 1);
    file_put_contents('todo-list.json', json_encode($list));

}

header('Content-Type: application/json');
echo json_encode($list);


?>