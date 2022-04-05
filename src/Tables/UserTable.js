import React from 'react'

const UserTable = (props) => (
    <table>
        <thead>
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
        <tbody> {
            props.users.length > 0 ? (props.users.map(user => (
                <tr key={
                    user.id
                }>
                    <td>{
                        user.name
                    }</td>
                    <td>{
                        user.username
                    }</td>
                    <td>
                        <button className="button muted-button"
                            onClick={
                                () => props.deleteUser(user.id)
                        }>View
                        </button>
                        <button className="button muted-button"
                            onClick={
                                () => {
                                    props.editRow(user)
                                }
                        }>Edit
                        </button>
                        <button className="button muted-button"
                            onClick={
                                () => props.deleteUser(user.id)
                        }>Delete
                        </button>
                    </td>
                </tr>
            ))) : (
                <tr>
                    <td colSpan={3}>No users</td>
                </tr>
            )
        } </tbody>
    </table>
);

export default UserTable
