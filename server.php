<?php

//leggo il file todolist.json e lo metto in una variabile come stringa
$filecontent = file_get_contents("todo-list.json");

//var_dump($filecontent);

$list = json_decode($filecontent, true);


if (isset($_POST['task'])) {
    $newtask = $_POST['task'];
    array_push($list, $newtask);
    file_put_contents('todo-list.json', json_encode($list));

}

if (isset($_POST['deletetask'])) {
    $indexx = $_POST['deletetask'];
    array_splice($list, $index, 1);
    file_put_contents('todo-list.json', json_encode($list));

}


//riempio di nuovo l'array con il contenuto

// if (isset($_GET['name'])) {
//     var_dump($_GET['name']);
// }

// var_dump($list);

// $students = [
//     [
//         'name' => 'Mario',
//         'last_name' => 'Rossi'
//     ],
//     [
//         'name' => 'Giovanna',
//         'last_name' => 'Bianchi'
//     ],
// ];

// $list[] = 'Vue';
// $newContent = json_encode($list);
// file_put_contents('todo-list.json', $newContent);


header('Content-Type: application/json');
echo json_encode($list);


?>