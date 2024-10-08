export class NegociacoesView{
    template(model: string): string{
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                    ${model}
                </tbody>
                <tfoot>
                </tfoot>
            </table>
        `;
    }
}