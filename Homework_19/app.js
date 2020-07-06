$(() => {
    const CUSTOMERS_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users';
    const DELETE_BTN_CLASS = 'delete-btn';
    const $customersContainer = $("#customersContainer");
    const $customerDataTemplate = $("#customerDataTemplate").html()

    const $createUser = $("#create-user");
    const $modal = $("#dialog-form");
    const $name = $("#name");
    const $surname = $("#surname");
    const $phone = $("#phone");
    const $email = $('#email')


    const allFields = $([]).add($name).add($surname).add($phone).add($email);
    let customers = [];

    $modal.dialog({
        autoOpen: false,
        height: 400,
        width: 350,
        modal: true,
        buttons: {
            "Додати клієнта": addCustomer,
            Відміна: function () {
                $modal.dialog("close");
            }
        },
        close: function () {
            form[0].reset();
            allFields.removeClass("ui-state-error");
        }
    })

    $modal.find("form").on("submit", function (event) {
        event.preventDefault();
        addCustomer();
    });
    
    $createUser.button().on("click", function () {
        $modal.dialog("open");
    });
    
    $customersContainer.on('click', '.' + DELETE_BTN_CLASS, onCustomerDeleteClick);
    
    init();

    function init() {
        getCustomers();
    }

    function getCustomers() {
        return fetch(CUSTOMERS_URL)
            .then((resp) => resp.json())
            .then(setCustomers)
            .then(renderCustomers);
    }

    function setCustomers(data) {
        return (customers = data);
    }

    function renderCustomers(data) {
        $customersContainer.html(data.map(generateCustomerHtml).join('\n'));
    }

    function generateCustomerHtml(data) {
        return $customerDataTemplate
            .replace('{{email}}', data.email)
            .replace('{{id}}', data.id)
            .replace('{{name}}', data.name)
            .replace('{{phone}}', data.phone)
            .replace('{{surname}}', data.surname)
    }

    function addCustomer() {

        const customer = {
            name: $name.val(),
            surname: $surname.val(),
            phone: $phone.val(),
            email: $email.val(),
        };

        fetch(CUSTOMERS_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(customer),
        })
            .then((resp) => resp.json())
            .then(appendCustomer);

        $modal.dialog("close");

    }

    function appendCustomer(data) {
        $customersContainer.append(generateCustomerHtml(data))
    }

    
    function onCustomerDeleteClick(e) {
        const customerId = $(e.target).parent().parent().data('customerId');
        deleteCustomer(customerId);
    }

    function deleteCustomer(id) {
        fetch(`${CUSTOMERS_URL}/${id}`, {
            method: 'DELETE',
        });
    
        customers = customers.filter((person) => person.id != id);
    
        renderCustomers(customers);
    }

})
