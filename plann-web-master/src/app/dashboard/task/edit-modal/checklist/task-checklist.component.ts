import { Component, OnDestroy, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { ChecklistItem } from './checklist-item';

@Component({
    moduleId: module.id,
    selector: 'plann-task-checklist',
    templateUrl: './task-checklist.component.html',
    styleUrls: ['./task-checklist.component.scss']
})
export class TaskChecklistComponent implements OnInit, OnDestroy {

    checklist: ChecklistItem[];

    constructor(private dragulaService: DragulaService) {

        this.checklist = [
            new ChecklistItem(1, 'task description 1'),
            new ChecklistItem(2, 'task description 2'),
            new ChecklistItem(3, 'task description 3'),
            new ChecklistItem(4, 'task description 4')
        ];
    }

    ngOnInit(): void {

        this.dragulaService.setOptions('checklist-items', {
            moves: function (element, container, handle) {

                return handle.tagName === 'I';
            }
        });
    }

    ngOnDestroy(): void {

        this.dragulaService.destroy('checklist-items');
    }

    addChecklistItem(itemDescription) {

        if (!itemDescription) { return; }

        const checklistLastItem = this.checklist.length - 1;

        const item = new ChecklistItem(this.checklist[checklistLastItem].id + 1, itemDescription);

        this.checklist.push(item);
    }

    removeChecklistItem(item) {

        const itemIndexInChecklist = this.checklist.indexOf(item);

        // TODO implement delete from server, if success, remove from array

        this.checklist.splice(itemIndexInChecklist, 1);
    }
}
