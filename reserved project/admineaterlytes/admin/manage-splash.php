<?php include('../include/menu.php') ?>
    
    
    <div class="container">
      
      <div class="mb-3">
        <label>Image Name</label>
        <input type="text" class="form-control" id="namebox" />
        <label id="extlab"></label>
        <img id="myimg"> <label id="upprogress"></label> <br> <br>
        <button class="btn btn-primary" id="selbtn">Select</button>
        <button class="btn btn-primary" id="upbtn">Upload</button>
        <button class="btn btn-primary" id="downbtn">Download</button>
      </div>
      <div class="mb-3">
        <label for="" class="form-label">urutan</label>
        <input type="number" class="form-control" id="urutan" />
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Title</label>
        <input type="text" class="form-control" id="title" />
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Subtitle</label>
        <input type="text" class="form-control" id="subtitle" />
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Explain</label>
        <input type="text" class="form-control" id="explain" />
      </div>
      <button type="submit" class="btn btn-primary" id="saveData" onclick="saveData()">Create</button>

      <table class="table">
        <thead>
          <tr>
            <th> urutan </th>
            <th> img </th>
            <th>Title</th>
            <th>Subtitle</th>
            <th>Explain</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody id="tbody">
            
        </tbody>
      </table>
    </div>

    <!-- Modal edit data -->
    <div class="modal fade" id="modalUpdate" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Eaterly Edit Splash</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <div class="mb-3">
          <label>Image Name</label>
        <input type="text" class="form-control" id="nameboxpop" />
        <label id="extlabpop"></label>
        <img id="myimg"> <label id="upprogress"></label> <br> <br>
        <button class="btn btn-primary" id="selbtnn">Select</button>
        <button class="btn btn-primary" id="upbtnn">Upload</button>
        <button class="btn btn-primary" id="downbtnn">Download</button>
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Title</label>
        <input type="text" class="form-control" id="title" />
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Subtitle</label>
        <input type="text" class="form-control" id="subtitle" />
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Explain</label>
        <input type="text" class="form-control" id="explain" />
      </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" id="updateData" onclick="updateData()">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    
    <?php include('../include/footer.php') ?>