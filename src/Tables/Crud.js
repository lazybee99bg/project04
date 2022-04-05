import React from 'react'
import PropTypes from 'prop-types'


function Crud(props) {
    Crud.propTypes = {
        posts: PropTypes.array
    };
    Crud.defaultCrud = {
        posts: []
    };
    const {posts} = props;
    console.log(posts);

    return (
        <div>
            <table class=" table-fixed divide-y divide-gray-300 border">
                <thead class="bg-gray-50">
                    <tr>
                        <th class="px-6 py-2 text-xl text-gray-500">
                            ID
                        </th>
                        <th class="px-6 py-2 text-xl text-gray-500">
                            Availability
                        </th>
                        <th class="px-6 py-2 text-xl text-gray-500">
                            Domain
                        </th>
                        <th class="px-6 py-2 text-xl text-gray-500">
                            Price
                        </th>
                        <th class="px-6 py-4">
                            <a href="" class="px-4 py-1 text-sm text-blue-600 bg-blue-200 rounded-full">add</a>
                        </th>

                    </tr>
                </thead>

                {
                posts.map((item, index) => {
                    return (
                        <tbody class="bg-white divide-y divide-gray-300 text-left">
                            <tr class="whitespace-nowrap"
                                key={
                                    index.availability
                            }>
                                <td class="px-6 py-4"
                                    key={
                                        index.id
                                }>
                                    <div class="text-sm text-gray-500">
                                        {
                                        item.id
                                    }</div>
                                </td>
                                <td class="px-10 py-4 text-sm text-gray-900"
                                    key={
                                        index.availability
                                }>
                                    {
                                    item.availability
                                } </td>
                                <td class="px-6 py-4"
                                    key={
                                        index.domain
                                }>
                                    <div class="text-sm text-gray-900">
                                        {
                                        item.domain
                                    } </div>
                                </td>

                                <td class="px-6 py-4"
                                    key={
                                        index.price
                                }>
                                    <div class="text-sm text-gray-500">
                                        {
                                        item.price
                                    }</div>
                                </td>
                                <td class="px-6 py-4"
                                    key={
                                        index.phone
                                }>
                                    <div class="text-sm text-gray-900">
                                        {
                                        item.phone
                                    } </div>
                                </td>
                                <td>
                                    <button className="button muted-button"
                                        onClick={
                                            () => props.deleteUser(item.id)
                                    }>View
                                    </button>
                                    <button className="button muted-button"
                                        onClick={
                                            () => {
                                                props.editRow(item.id)
                                            }
                                    }>Edit
                                    </button>
                                    <button className="button muted-button"
                                        onClick={
                                            () => props.deleteUser(item.id)
                                    }>Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    )
                })
            } </table>
        </div>


    )
}
export default Crud
