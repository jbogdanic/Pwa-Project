<template>
<form>
    <strong id="sjak">Order Here!</strong>

    <b-field label="Ime i Prezime">
                <b-input v-model="name"></b-input>
    </b-field>

    <b-field label="Adresa">
                <b-input v-model="name"></b-input>
    </b-field>
    <b-field label="Broj telefona">
                <b-input v-model="name"></b-input>
    </b-field>

      <b-field label="Toppings">
            <b-select placeholder="Select a character" icon="account">
                <optgroup label="Mesni">
                    <option value="Kulen">Kulen</option>
                    <option value="Piletina">Piletina</option>
                    <option value="Sunka">Sunka</option>
                </optgroup>

                <optgroup label="Sir">
                    <option value="Mozzarela">Mozzarela</option>
                    <option value="Gouda">Gouda</option>
                </optgroup>

                <optgroup label="Specijanli">
                    <option value="pk">Punjena korica</option>
                    <option value="Gljive">Gljive</option>
                </optgroup>
            </b-select>
        </b-field>

        <b-button type="is-success">Naruci</b-button>
</form>

</template>

<script>

</script>

<style>

form{
    background-color: #d1eddd;
}
#sjak{
    margin-left: -200px;
    margin-bottom: 50px;
    font-size: 50px;
}
</style>