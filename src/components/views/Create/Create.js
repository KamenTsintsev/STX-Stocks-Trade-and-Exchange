export default function CreateForm() {

    return (
        <section>
            <form action="#">
                <label htmlFor="name">Product Name:</label>
                <input id="name" type="text" placeholder="ex: Apple MacBook Air 256GB" />
                <label htmlFor="category">Product Category:</label>
                <select name="category" id="category">
                    <option value="#">Select category</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value="">Garden</option>
                </select>
                <label htmlFor="quality">Product Quality:</label>
                <div>
                    <label htmlFor="quality">Product Quality:</label>
                    <input id="New" type="radio" name="quality" value="New" checked />
                    <label htmlFor="quality">Product Quality:</label>
                    <input id="Used" type="radio" name="quality" value="Used" />
                    <label htmlFor="quality">Product Quality:</label>
                    <input id="Trash" type="radio" name="quality" value="Trash" />
                </div>



            </form>
        </section>
    )
}