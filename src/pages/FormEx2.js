function FormEx2() {
    return (
        <div>
            <input type='text' name='name' placeholder='Enter your name' required />
            <input type='email' name='mail' placeholder='Enter your email address' required />
            <input type='textarea' name='bio' placeholder='Write something about yourself' required />
            <input type='radio' id='man' name='sex' value='man' required />
            <label htmlFor='man'>Man</label>
            <input type='radio' id='woman' name='sex' value='woman' required />
            <label htmlFor='woman'>Woman</label>
            <input type="checkbox" id="statue" name="statue" />
            <label htmlFor="statue">Statue</label>
        </div>
    );
}

export default FormEx2;