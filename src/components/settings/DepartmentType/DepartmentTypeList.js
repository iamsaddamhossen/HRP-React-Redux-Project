import React from "react";
import CreateDepartmentType from "../DepartmentType/CreateDepartmentType";

function DepartmentTypeList() {
  return (
    <>
      {/* // <!-- Page Header --> */}
      <div class="page-header">
        <div class="row align-items-center">
          <div class="col">
            <h3 class="page-title">Department Type</h3>
            <ul class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="index.html">Dashboard</a>
              </li>
              <li class="breadcrumb-item active">Department</li>
            </ul>
          </div>
          
          <div class="col-auto float-right ml-auto">
            <a
              href="#"
              class="btn add-btn"
              data-toggle="modal"
              data-target="#add_department"
            >
              <i class="fa fa-plus"></i> Add Department
            </a>
          </div>
        </div>
      </div>
      {/* // <!-- /Page Header --> */}

      <div class="row">
        <div class="col-md-12">
          <div>
            <table class="table table-striped table-bordered custom-table mb-0 datatable">
              <thead>
                <tr>
                  <th style={{ width: "30px" }}>#</th>
                  <th>Department Name</th>
                  <th class="text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Web Development</td>
                  <td class="text-right">
                    <div class="dropdown dropdown-action">
                      <a
                        href="#"
                        class="action-icon dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="material-icons">more_vert</i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-right">
                        <a
                          class="dropdown-item"
                          href="#"
                          data-toggle="modal"
                          data-target="#edit_department"
                        >
                          <i class="fa fa-pencil m-r-5"></i> Edit
                        </a>
                        <a
                          class="dropdown-item"
                          href="#"
                          data-toggle="modal"
                          data-target="#delete_department"
                        >
                          <i class="fa fa-trash-o m-r-5"></i> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Application Development</td>
                  <td class="text-right">
                    <div class="dropdown dropdown-action">
                      <a
                        href="#"
                        class="action-icon dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="material-icons">more_vert</i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-right">
                        <a
                          class="dropdown-item"
                          href="#"
                          data-toggle="modal"
                          data-target="#edit_department"
                        >
                          <i class="fa fa-pencil m-r-5"></i> Edit
                        </a>
                        <a
                          class="dropdown-item"
                          href="#"
                          data-toggle="modal"
                          data-target="#delete_department"
                        >
                          <i class="fa fa-trash-o m-r-5"></i> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>IT Management</td>
                  <td class="text-right">
                    <div class="dropdown dropdown-action">
                      <a
                        href="#"
                        class="action-icon dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="material-icons">more_vert</i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-right">
                        <a
                          class="dropdown-item"
                          href="#"
                          data-toggle="modal"
                          data-target="#edit_department"
                        >
                          <i class="fa fa-pencil m-r-5"></i> Edit
                        </a>
                        <a
                          class="dropdown-item"
                          href="#"
                          data-toggle="modal"
                          data-target="#delete_department"
                        >
                          <i class="fa fa-trash-o m-r-5"></i> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Accounts Management</td>
                  <td class="text-right">
                    <div class="dropdown dropdown-action">
                      <a
                        href="#"
                        class="action-icon dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="material-icons">more_vert</i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-right">
                        <a
                          class="dropdown-item"
                          href="#"
                          data-toggle="modal"
                          data-target="#edit_department"
                        >
                          <i class="fa fa-pencil m-r-5"></i> Edit
                        </a>
                        <a
                          class="dropdown-item"
                          href="#"
                          data-toggle="modal"
                          data-target="#delete_department"
                        >
                          <i class="fa fa-trash-o m-r-5"></i> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Support Management</td>
                  <td class="text-right">
                    <div class="dropdown dropdown-action">
                      <a
                        href="#"
                        class="action-icon dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="material-icons">more_vert</i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-right">
                        <a
                          class="dropdown-item"
                          href="#"
                          data-toggle="modal"
                          data-target="#edit_department"
                        >
                          <i class="fa fa-pencil m-r-5"></i> Edit
                        </a>
                        <a
                          class="dropdown-item"
                          href="#"
                          data-toggle="modal"
                          data-target="#delete_department"
                        >
                          <i class="fa fa-trash-o m-r-5"></i> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Marketing</td>
                  <td class="text-right">
                    <div class="dropdown dropdown-action">
                      <a
                        href="#"
                        class="action-icon dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="material-icons">more_vert</i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-right">
                        <a
                          class="dropdown-item"
                          href="#"
                          data-toggle="modal"
                          data-target="#edit_department"
                        >
                          <i class="fa fa-pencil m-r-5"></i> Edit
                        </a>
                        <a
                          class="dropdown-item"
                          href="#"
                          data-toggle="modal"
                          data-target="#delete_department"
                        >
                          <i class="fa fa-trash-o m-r-5"></i> Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>


      <CreateDepartmentType />

    </>
  );
}

export default DepartmentTypeList;
