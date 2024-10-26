// Copyright (c) 2024, amr + yousif and contributors
// For license information, please see license.txt

frappe.ui.form.on('Assignment', {
	refresh(frm) {
        frm.toggle_display(['data'], frm.doc.workflow_state === 'In Progress');
        if (frm.doc.workflow_state == "In Progress"){
            frm.add_custom_button(__('Create Assignment Report'), function() {			
				frappe.model.with_doctype('AssignmentReport', function() {
					var new_doc = frappe.model.get_new_doc('AssignmentReport');
					new_doc.assignment = frm.doc.name;
					console.log(new_doc);
					console.log(frm.doc);
					// فتح المستند الجديد
					frappe.set_route('Form', 'AssignmentReport', new_doc.name);
				});
            }); // هذا يضيف الزر في قائمة الإجراءات
           
		}
		if (frm.doc.creatingdate && frm.doc.duration) {
            // حساب الفرق بين تاريخ اليوم وتاريخ الإنشاء
            let creation_date = new Date(frm.doc.creatingdate);
            let current_date = new Date();
            
            // حساب الفرق بالأيام بين اليوم وتاريخ الإنشاء
            let time_diff = current_date - creation_date;
            let diff_days = Math.floor(time_diff / (1000 * 60 * 60 * 24));
            
            // حساب التأخير
            let delay = diff_days - frm.doc.duration;
            
            // إذا كان هناك تأخير (القيمة موجبة)
            frm.set_value('delay_days', delay > 0 ? delay : 0);
        }
	}
})